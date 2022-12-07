import React from "react";
import {
  MainContainer,
  DesignContainer,
  TextCase,
  ContextBox,
  ChatBox,
} from "./MainPage.style";
import MyProfile from "../components/MyProfile";
import { useEffect } from "react";
import Terminal from "../components/Terminal";

const MainPage = () => {
  return (
    <MainContainer>
      <ContextBox>
        <Terminal></Terminal>
        <TextCase>
          <div className="int1">Hello 🖐</div>
          <div className="int2">Im FrontEnd Devleoper, Donggeun Lee 🤗</div>
          <div className="int3">I'm trying for a better UI / UX 💻</div>
          <div className="int4">If you want to know more about me, </div>
          <div className="int5">Click this folder or Text Title 👇👇</div>
        </TextCase>
        <DesignContainer>
          <div className="itemCase">
            <div className="item">
              <img src="../assets/profile.png" alt="" />
            </div>
            <h5>About me</h5>
          </div>
          <div className="itemCase">
            <div className="item onsikgo">
              <img src="../assets/onsikgo.png" alt="" />
            </div>
            <h5>Onsikgo Project</h5>
          </div>
          <div className="itemCase">
            <div className="item">
              <img src="../assets/mlbti.png" alt="" />
            </div>
            <h5>MLBTI Project</h5>
          </div>
          <div className="itemCase">
            <div className="item dstation">
              <img src="../assets/d-station.png" alt="" />
            </div>
            <h5>D-station Project</h5>
          </div>
          <div className="itemCase">
            <div className="item">
              <img src="../assets/mail.png" alt="" />
            </div>
            <h5>Contact me</h5>
          </div>
        </DesignContainer>
        <ChatBox>
          <div className="hbox">
            <h5 className="firsth">DonggeunLee : </h5>
            <h5 className="sech"> ~/portfoilo/</h5>
          </div>
          <label htmlFor="navi">
            <input type="text" id="navi" placeholder="aboutme" autoFocus />
          </label>
        </ChatBox>
      </ContextBox>

      <ContextBox>
        <Terminal></Terminal>
        <MyProfile></MyProfile>
      </ContextBox>
    </MainContainer>
  );
};

export default MainPage;
