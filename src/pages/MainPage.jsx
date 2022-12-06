import React from "react";
import { MainContainer, DesignContainer, Introduce } from "./MainPage.style";
import MyProfile from "../components/MyProfile";
import { useEffect } from "react";
import Terminal from "../components/Terminal";

const MainPage = () => {
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
    const intro = document.querySelectorAll("div.intro");
    titleList.forEach((el) => observer.observe(el));
    intro.forEach((el) => observer.observe(el));
  });

  return (
    <MainContainer>
      <Introduce className="intro">
        <Terminal></Terminal>
        <h1>Hello 🖐</h1>
        <h1>Im FrontEnd Devleoper, Donggeun Lee 🤗</h1>
        <h1>I'm trying for a better UI / UX 💻</h1>
        <h1>If you want to know more about me, </h1>
        <h1>Please scroll down! 👇👇</h1>
      </Introduce>

      <DesignContainer>
        <div className="item">
          <img src="../assets/profile.png" alt="" />
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
          <img src="../assets/d-station.png" alt="" />
          <h2>Portfolio</h2>
        </div>
        <div className="item">
          <img src="" alt="" />
          <h2>Contact me</h2>
        </div>
      </DesignContainer>
      <MyProfile></MyProfile>
    </MainContainer>
  );
};

export default MainPage;
