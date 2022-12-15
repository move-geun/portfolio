import React from "react";
import { MainContainer, ContextBox } from "./MainPage.style";
import IntroPage from "../components/IntroPage";
import MyProfile from "../components/MyProfile";
import Terminal from "../components/Terminal";
import ProjectPage from "../components/ProjectPage";
import { onsikgo, mlbti, dstation } from "../components/Project";
import { useRecoilState } from "recoil";
import { NowPage } from "../recoil/atoms";
import { useEffect } from "react";

const MainPage = () => {
  const [nowPage, setNowPage] = useRecoilState(NowPage);
  useEffect(() => {
    setNowPage("intro");
  }, []);

  return (
    <MainContainer>
      {nowPage === "intro" ? (
        <ContextBox>
          <Terminal></Terminal>
          <IntroPage></IntroPage>
        </ContextBox>
      ) : null}

      {nowPage === "aboutme" ? (
        <ContextBox>
          <Terminal></Terminal>
          <MyProfile></MyProfile>
        </ContextBox>
      ) : null}

      {nowPage === "onsikgo" ? (
        <ContextBox>
          <Terminal></Terminal>
          <ProjectPage project={onsikgo}></ProjectPage>
        </ContextBox>
      ) : null}

      {nowPage === "mlbti" ? (
        <ContextBox>
          <Terminal></Terminal>
          <ProjectPage project={mlbti}></ProjectPage>
        </ContextBox>
      ) : null}

      {nowPage === "dstation" ? (
        <ContextBox>
          <Terminal></Terminal>
          <ProjectPage project={dstation}></ProjectPage>
        </ContextBox>
      ) : null}
    </MainContainer>
  );
};

export default MainPage;
