import React, { useEffect, useRef, useState } from "react";
import FrontSlider from "./FrontSlider";
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
  const slideRef = useRef();
  const [count, setCount] = useState(1);
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

  useEffect(() => {
    const interval = setTimeout(() => {
      setCount(() => {
        if (count < 2) {
          setCount(count + 1);
        } else {
          setCount(1);
        }
      });

      handleSlider(count);

      return () => clearTimeout(interval);
    }, 2000);
  });

  const handleSlider = (count) => {
    if (count === 2) {
      slideRef.current.style.transition = "0.5s ease";
      slideRef.current.style.transform = "translateX(0)";
    } else {
      slideRef.current.transition = "0.5s ease-in-out";
      slideRef.current.style.transform = `translateX(-${200 * count}px)`;
    }
  };

  return (
    <MyProfileContainer>
      <h3 className="title">{title}</h3>
      <div className="aboutme">
        <img className="profile" src="./assets/skills/me.jpg" alt="" />
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
          <FrontSlider slideRef={slideRef} count={count}></FrontSlider>
        </div>

        <div>
          <h3>Backend</h3>
          <div className="skilllist">
            <div>
              <img src="./assets/skills/django.png" alt="" />
            </div>
            <div>
              <img src="./assets/skills/python.png" alt="" />
            </div>
          </div>
        </div>

        <div>
          <h3>Tool</h3>
          <div className="skilllist">
            <div>
              <img src="./assets/skills/git.png" alt="" />
            </div>
            <div>
              <img src="./assets/skills/github.png" alt="" />
            </div>
            <div>
              <img src="./assets/skills/gitlab.png" alt="" />
            </div>
            <div>
              <img src="./assets/skills/jira.png" alt="" />
            </div>
            <div>
              <img src="./assets/skills/slack.jpg" alt="" />
            </div>
            <div>
              <img src="./assets/skills/figma.png" alt="" />
            </div>
          </div>
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
