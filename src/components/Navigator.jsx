import React, { useState } from "react";
import { NavigatorContainer } from "./Navigator.style";
import { useRecoilState } from "recoil";
import { NowPage } from "../recoil/atoms";
import Terminal from "./Terminal";

const Navigator = () => {
  const [nowPage, setNowPage] = useRecoilState(NowPage);
  const goIntro = () => {
    setNowPage("intro");
  };
  const goProfile = () => {
    setNowPage("aboutme");
  };
  const goOnsikgo = () => {
    setNowPage("onsikgo");
  };
  const goMlbti = () => {
    setNowPage("mlbti");
  };
  const goDstation = () => {
    setNowPage("dstation");
  };
  const goContact = () => {
    setNowPage("contact");
  };
  return (
    <NavigatorContainer>
      <Terminal></Terminal>
      <div className="itemCase marbox" onClick={goIntro}>
        <div className="item hello">
          <img src="./assets/skills/hello.png" alt="" />
        </div>
        <h6>Intro</h6>
      </div>
      <div className="itemCase" onClick={goProfile}>
        <div className="item">
          <img src="./assets/skills/profile.png" alt="" />
        </div>
        <h6>About me</h6>
      </div>
      <div className="itemCase" onClick={goOnsikgo}>
        <div className="item onsikgo">
          <img src="./assets/skills/onsikgo.png" alt="" />
        </div>
        <h6>Onsikgo Project</h6>
      </div>
      <div className="itemCase" onClick={goMlbti}>
        <div className="item">
          <img src="./assets/skills/mlbti.png" alt="" />
        </div>
        <h6>MLBTI Project</h6>
      </div>
      <div className="itemCase" onClick={goDstation}>
        <div className="item dstation">
          <img src="./assets/skills/d-station.png" alt="" />
        </div>
        <h6>D-station Project</h6>
      </div>
      <div className="itemCase" onClick={goContact}>
        <div className="item">
          <img src="./assets/skills/mail.png" alt="" />
        </div>
        <h6>Contact me</h6>
      </div>
    </NavigatorContainer>
  );
};
export default Navigator;
