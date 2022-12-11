import React from "react";
import {
  MyProfileContainer,
  ChatBox,
  FlexCol,
  FlexRow,
} from "./MyProfile.style";

const MyProfile = () => {
  const title = "< About me / >";

  return (
    <MyProfileContainer>
      <h3 className="title">{title}</h3>
      <div className="aboutme">
        <img className="profile" src="./assets/me.jpg" alt="" />
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
          <div className="skilllist">
            <div>
              <img src="./assets/html.png" alt="" />
            </div>
            <div>
              <img src="./assets/css.png" alt="" />
            </div>
            <div>
              <img src="./assets/js.png" alt="" />
            </div>
            <div>
              <img src="./assets/react.png" alt="" />
            </div>
            <div>
              <img src="./assets/redux.png" alt="" />
            </div>
            <div>
              <img src="./assets/recoil.png" alt="" />
            </div>
            <div>
              <img src="./assets/vue.png" alt="" />
            </div>
            <div>
              <img src="./assets/three.png" alt="" />
            </div>
          </div>
        </div>

        <div>
          <h3>Backend</h3>
          <div className="skilllist">
            <div>
              <img src="./assets/django.png" alt="" />
            </div>
            <div>
              <img src="./assets/python.png" alt="" />
            </div>
          </div>
        </div>

        <div>
          <h3>Tool</h3>
          <div className="skilllist">
            <div>
              <img src="./assets/git.png" alt="" />
            </div>
            <div>
              <img src="./assets/github.png" alt="" />
            </div>
            <div>
              <img src="./assets/gitlab.png" alt="" />
            </div>
            <div>
              <img src="./assets/jira.png" alt="" />
            </div>
            <div>
              <img src="./assets/slack.jpg" alt="" />
            </div>
            <div>
              <img src="./assets/figma.png" alt="" />
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
          <input type="text" id="navi" placeholder="onsikgo" autoFocus />
        </label>
      </ChatBox>
    </MyProfileContainer>
  );
};

export default MyProfile;
