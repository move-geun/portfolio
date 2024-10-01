import React, { useState } from "react";
import ImgSlider from "./ImgSlider";
import {
  MyProfileContainer,
  ChatBox,
  FlexCol,
  FlexRow,
} from "./MyProfile.style";
import { useRecoilState } from "recoil";
import { NowPage } from "../recoil/atoms";

const MyProfile = () => {
  const title = "< About me / >";
  const [nowPage, setNowPage] = useRecoilState(NowPage);
  const [tmpSearch, setTmpSearch] = useState("");
  const [noindex, setNoindex] = useState(false);

  const search = (e) => {
    e.preventDefault();
    let index = e.target.value.toLowerCase();
    setTmpSearch(index);
  };

  const goSearch = (e) => {
    if (e.keyCode === 13) {
      if (tmpSearch === "intro") {
        setNowPage("intro");
      } else if (tmpSearch === "aboutme") {
        setNowPage("aboutme");
      } else if (tmpSearch === "onsikgo") {
        setNowPage("onsikgo");
      } else if (tmpSearch === "mlbti") {
        setNowPage("mlbti");
      } else if (tmpSearch === "dstation") {
        setNowPage("dstation");
      } else if (tmpSearch === "contact") {
        setNowPage("contact");
      } else {
        setNoindex(true);
      }
    }
  };

  const frontImg = [
    {
      src: process.env.PUBLIC_URL + "/assets/skills/js.png",
      alt: "JS",
    },
    {
      src: process.env.PUBLIC_URL + "/assets/skills/react.png",
      alt: "React",
    },
    {
      src: process.env.PUBLIC_URL + "/assets/skills/redux.png",
      alt: "Redux",
    },
    {
      src: process.env.PUBLIC_URL + "/assets/skills/recoil.png",
      alt: "Recoil",
    },
    {
      src: process.env.PUBLIC_URL + "/assets/skills/vue.png",
      alt: "Vue",
    },
    {
      src: process.env.PUBLIC_URL + "/assets/skills/three.png",
      alt: "Three.js",
    },
  ];

  const backImg = [
    {
      src: process.env.PUBLIC_URL + "/assets/skills/django.png",
      alt: "django",
    },
    {
      src: process.env.PUBLIC_URL + "/assets/skills/python.png",
      alt: "python",
    },
  ];

  const toolImg = [
    {
      src: process.env.PUBLIC_URL + "/assets/skills/git.png",
      alt: "git",
    },
    {
      src: process.env.PUBLIC_URL + "/assets/skills/github.png",
      alt: "github",
    },
    {
      src: process.env.PUBLIC_URL + "/assets/skills/gitlab.png",
      alt: "gitlab",
    },
    {
      src: process.env.PUBLIC_URL + "/assets/skills/jira.png",
      alt: "jira",
    },
    {
      src: process.env.PUBLIC_URL + "/assets/skills/slack.jpg",
      alt: "slack",
    },
    {
      src: process.env.PUBLIC_URL + "/assets/skills/figma.png",
      alt: "figma",
    },
  ];

  return (
    <MyProfileContainer>
      <h3 className="title">{title}</h3>
      <div className="aboutme">
        <img
          className="profile"
          rel="preload"
          src={process.env.PUBLIC_URL + "/assets/skills/me.jpg"}
          alt=""
        />
        <div className="sayHello">
          <div>안녕하세요</div>
          <FlexRow>
            <div style={{ color: "#99CCCC" }}>근거있는 기획</div>으로,
          </FlexRow>
          <FlexRow>
            <div style={{ color: "#FFDDDD" }}>고객 행동을 유도</div>하는
          </FlexRow>
          <div>Frontend 개발자 이동근입니다</div>
        </div>
        <FlexCol>
          <div>
            <div style={{ color: "#f1cb6b" }}>프로젝트 경력 (총 6개월)</div>
            <ul>
              <li>D-station (2022.10.11 ~ 2022.11.18)</li>
              <li>MLBTI (2022.08.22 ~ 2022.10.07)</li>
              <li>Onsikgo (2022.07.04 ~ 2022.08.19)</li>
            </ul>
          </div>
          <div>
            <div style={{ color: "#f1cb6b" }}>교육사항</div>
            <ul>
              <li>삼성청년SW아카데미 -22.12 수료</li>
              <li>동아대학교 경영학과 -20.08 졸</li>
              <li>양산고등학교 -14.02 졸</li>
            </ul>
          </div>
        </FlexCol>
      </div>
      <div className="skill">
        <h2 style={{ color: "#FFC686" }}>🛠 Skills </h2>
        <div>
          <h3>Frontend</h3>
          <ImgSlider slideRef={frontImg}></ImgSlider>
        </div>

        <div>
          <h3>Backend</h3>
          <ImgSlider slideRef={backImg}></ImgSlider>
        </div>

        <div>
          <h3>Tool</h3>
          <ImgSlider slideRef={toolImg}></ImgSlider>
        </div>
      </div>

      <ChatBox>
        <div className="hbox">
          <h5 className="firsth">DonggeunLee : </h5>
          <h5 className="sech"> ~/portfolio/aboutme/</h5>
        </div>
        <label htmlFor="navi">
          <input
            type="text"
            id="navi"
            placeholder="Onsikgo"
            onChange={(e) => search(e)}
            onKeyUp={(e) => goSearch(e)}
          />
        </label>
        {noindex ? (
          <div className="error">
            <h4>Please search with the keyword below</h4>
            <h5>intro, aboutme, onsikgo, mlbti, dstation, contact</h5>
          </div>
        ) : null}
      </ChatBox>
    </MyProfileContainer>
  );
};

export default MyProfile;
