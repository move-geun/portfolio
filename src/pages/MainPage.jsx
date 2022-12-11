import React from "react";
import { MainContainer, ContextBox } from "./MainPage.style";
import IntroPage from "../components/IntroPage";
import MyProfile from "../components/MyProfile";
import Onsikgo from "../components/Onsikgo";
import { useEffect } from "react";
import Terminal from "../components/Terminal";

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
        <Onsikgo></Onsikgo>
      </ContextBox>
    </MainContainer>
  );
};

export default MainPage;
