import React, { useState, useEffect } from "react";
import { NavigatorContainer } from "./Navigator.style";
import { useRecoilState } from "recoil";
import { NowPage } from "../recoil/atoms";
import Terminal from "./Terminal";

const Navigator = () => {
  const [nowPage, setNowPage] = useRecoilState(NowPage);
  const [disableClick, setDisableClick] = useState(true);

  const goIntro = () => {
    if (disableClick) return;
    setNowPage("intro");
  };
  const goProfile = () => {
    if (disableClick) return;
    setNowPage("aboutme");
  };
  const goOnsikgo = () => {
    if (disableClick) return;
    setNowPage("onsikgo");
  };
  const goMlbti = () => {
    if (disableClick) return;
    setNowPage("mlbti");
  };
  const goDstation = () => {
    if (disableClick) return;
    setNowPage("dstation");
  };
  const goContact = () => {
    if (disableClick) return;
    setNowPage("contact");
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setDisableClick(false);
    }, 3400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <NavigatorContainer>
      <Terminal></Terminal>
      <div className="itemCase marbox" onClick={goIntro}>
        <div className="item hello">
          <img
            src={process.env.PUBLIC_URL + "/assets/skills/hello.png"}
            alt=""
          />
        </div>
        <h6>Intro</h6>
      </div>
      <div className="itemCase" onClick={goProfile}>
        <div className="item">
          <img
            src={process.env.PUBLIC_URL + "/assets/skills/profile.png"}
            alt=""
          />
        </div>
        <h6>About me</h6>
      </div>
      <div className="itemCase" onClick={goOnsikgo}>
        <div className="item onsikgo">
          <img
            src={process.env.PUBLIC_URL + "/assets/skills/onsikgo.png"}
            alt=""
          />
        </div>
        <h6>Onsikgo Project</h6>
      </div>
      <div className="itemCase" onClick={goMlbti}>
        <div className="item">
          <img
            src={process.env.PUBLIC_URL + "/assets/skills/mlbti.png"}
            alt=""
          />
        </div>
        <h6>MLBTI Project</h6>
      </div>
      <div className="itemCase" onClick={goDstation}>
        <div className="item dstation">
          <img
            src={process.env.PUBLIC_URL + "/assets/skills/d-station.png"}
            alt=""
          />
        </div>
        <h6>D-station Project</h6>
      </div>
      <div className="itemCase" onClick={goContact}>
        <div className="item">
          <img
            src={process.env.PUBLIC_URL + "/assets/skills/mail.png"}
            alt=""
          />
        </div>
        <h6>Contact me</h6>
      </div>
    </NavigatorContainer>
  );
};
export default Navigator;
