import React, { useEffect } from "react";
import { MainContainer, ContextBox } from "./MainPage.style";
import IntroPage from "../components/IntroPage";
import MyProfile from "../components/MyProfile";
import Terminal from "../components/Terminal";
import ProjectPage from "../components/ProjectPage";
import Contact from "../components/Contact";
import Navigator from "../components/Navigator";
import { onsikgo, mlbti, dstation } from "../components/Project";
import { useRecoilState } from "recoil";
import { NowPage } from "../recoil/atoms";

const MainPage = () => {
  const [nowPage, setNowPage] = useRecoilState(NowPage);

  useEffect(() => {
    setNowPage("intro");
  }, []);

  return (
    <MainContainer>
      <Navigator></Navigator>
      <ContextBox>
        <Terminal></Terminal>
        {nowPage === "intro" ? (
          <IntroPage></IntroPage>
        ) : nowPage === "aboutme" ? (
          <MyProfile></MyProfile>
        ) : nowPage === "onsikgo" ? (
          <ProjectPage project={onsikgo}></ProjectPage>
        ) : nowPage === "mlbti" ? (
          <ProjectPage project={mlbti}></ProjectPage>
        ) : nowPage === "dstation" ? (
          <ProjectPage project={dstation}></ProjectPage>
        ) : nowPage === "contact" ? (
          <Contact></Contact>
        ) : null}
      </ContextBox>
    </MainContainer>
  );
};

export default MainPage;
