import React from "react";
import { MainContainer, DesignContainer } from "./MainPage.style";
import { useEffect } from "react";
import { BackgroundColor } from "../recoil/atoms";
import { useRecoilState } from "recoil";

const MainPage = () => {
  const [background, setBackground] = useRecoilState(BackgroundColor);

  const themaChange = (a) => {
    setBackground(a);
  };

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.8,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      } else {
        entry.target.classList.remove("active");
      }
    });
  }, options);

  useEffect(() => {
    const titleList = document.querySelectorAll("div.item");
    titleList.forEach((el) => observer.observe(el));
  });

  return (
    <MainContainer>
      <div className="introduce">
        <h1>Hello 🖐</h1>
        <h1>Im FrontEnd Devleoper, Donggeun Lee 🤗</h1>
        <h1>I'm trying for a better UI / UX 💻</h1>
        <h1>If you want to know more about me, </h1>
        <h1>Please scroll down! 👇👇</h1>
      </div>

      <DesignContainer>
        <div className="item">
          <img src="../assets/git.png" alt="" />
          <h2>About me</h2>
        </div>
        <div className="item">
          <img src="../assets/onsikgo.png" alt="" />
          <h2>Onsikgo Project</h2>
        </div>
        <div className="item">
          <img src="../assets/mlbti.png" alt="" />
          <h2>MLBTI Project</h2>
        </div>
        <div className="item">
          <img src="../assets/d-station.png" alt="" />
          <h2>D-station Project</h2>
        </div>
        <div className="item">
          <img src="" alt="" />
          <h2>Contact me</h2>
        </div>
      </DesignContainer>
    </MainContainer>
  );
};

export default MainPage;
