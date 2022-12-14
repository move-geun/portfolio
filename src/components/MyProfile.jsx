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

  // useEffect(() => {
  //   const interval = setTimeout(() => {
  //     setCount(() => {
  //       if (count < 2) {
  //         setCount(count + 1);
  //       } else {
  //         setCount(1);
  //       }
  //     });

  //     handleSlider(count);

  //     return () => clearTimeout(interval);
  //   }, 2000);
  // });

  // const handleSlider = (count) => {
  //   if (count === 2) {
  //     slideRef.current.style.transition = "0.5s ease";
  //     slideRef.current.style.transform = "translateX(0)";
  //   } else {
  //     slideRef.current.transition = "0.5s ease-in-out";
  //     slideRef.current.style.transform = `translateX(-${200 * count}px)`;
  //   }
  // };

  return (
    <MyProfileContainer>
      <h3 className="title">{title}</h3>
      <div className="aboutme">
        <img
          className="profile"
          src={process.env.PUBLIC_URL + "/assets/skills/me.jpg"}
          alt=""
        />
        <div className="sayHello">
          <div>???????????????</div>
          <FlexRow>
            <div style={{ color: "#99CCCC" }}>???????????? ??????</div>??????,
          </FlexRow>
          <FlexRow>
            <div style={{ color: "#FFDDDD" }}>?????? ????????? ??????</div>??????
          </FlexRow>
          <div>Frontend ????????? ??????????????????</div>
        </div>
        <FlexCol>
          <div>
            <div style={{ color: "#f1cb6b" }}>???????????? ?????? (??? 6??????)</div>
            <ul>
              <li>D-station (2022.10.11 ~ 2022.11.18)</li>
              <li>MLBTI (2022.08.22 ~ 2022.10.07)</li>
              <li>Onsikgo (2022.07.04 ~ 2022.08.19)</li>
            </ul>
          </div>
          <div>
            <div style={{ color: "#f1cb6b" }}>????????????</div>
            <ul>
              <li>????????????SW???????????? -22.12 ??????</li>
              <li>??????????????? ???????????? -20.08 ???</li>
              <li>?????????????????? -14.02 ???</li>
            </ul>
          </div>
        </FlexCol>
      </div>
      <div className="skill">
        <h2 style={{ color: "#FFC686" }}>???? Skills </h2>
        <div>
          <h3>Frontend</h3>
          <FrontSlider slideRef={slideRef} count={count}></FrontSlider>
        </div>

        <div>
          <h3>Backend</h3>
          <div className="skilllist">
            <div>
              <img
                src={process.env.PUBLIC_URL + "/assets/skills/django.png"}
                alt=""
              />
            </div>
            <div>
              <img
                src={process.env.PUBLIC_URL + "/assets/skills/python.png"}
                alt=""
              />
            </div>
          </div>
        </div>

        <div>
          <h3>Tool</h3>
          <div className="skilllist">
            <div>
              <img
                src={process.env.PUBLIC_URL + "/assets/skills/git.png"}
                alt=""
              />
            </div>
            <div>
              <img
                src={process.env.PUBLIC_URL + "/assets/skills/github.png"}
                alt=""
              />
            </div>
            <div>
              <img
                src={process.env.PUBLIC_URL + "/assets/skills/gitlab.png"}
                alt=""
              />
            </div>
            <div>
              <img
                src={process.env.PUBLIC_URL + "/assets/skills/jira.png"}
                alt=""
              />
            </div>
            <div>
              <img
                src={process.env.PUBLIC_URL + "/assets/skills/slack.jpg"}
                alt=""
              />
            </div>
            <div>
              <img
                src={process.env.PUBLIC_URL + "/assets/skills/figma.png"}
                alt=""
              />
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
