import React from "react";
import { MainContainer, ContextBox } from "./MainPage.style";
import IntroPage from "../components/IntroPage";
import MyProfile from "../components/MyProfile";
import Terminal from "../components/Terminal";
import ProjectPage from "../components/ProjectPage";
import { onsikgo, mlbti, dstation } from "../components/Project";
import { useEffect } from "react";

const MainPage = () => {
  return (
    <MainContainer>
      <ContextBox>
        <Terminal></Terminal>
        <IntroPage></IntroPage>
      </ContextBox>

      <ContextBox>
        <Terminal></Terminal>
        <MyProfile></MyProfile>
      </ContextBox>

      <ContextBox>
        <Terminal></Terminal>
        <ProjectPage project={mlbti}></ProjectPage>
      </ContextBox>
    </MainContainer>
  );
};

export default MainPage;
