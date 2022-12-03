import React from "react";
import { MyProfileContainer } from "./MyProfile.style";

const MyProfile = () => {
  return (
    <MyProfileContainer>
      <div className="introduce">
        <img src="" alt="" />
        <div>
          <div>
            <h2>안녕하세요</h2>
            <h2>빠른 피드백을 좋아하는</h2>
            <h2>Frontend 개발자 이동근입니다</h2>
          </div>
          <div>
            <h2>
              동아대학교에서 **경영학**을 전공으로 졸업하였고, 현재 **FrontEnd
              개발**에 몰두하고 있습니다. 빠른 **피드백을 원동력 삼아**, **더
              나은 결과물**을 만드는 것을 좋아합니다. 풍부한 UI와 효율적인 UX를
              바탕으로, **내외부 고객 모두를 만족**시킬 서비스를 만들겠습니다.
            </h2>
          </div>
        </div>
      </div>
      <hr />
      <div className="profile">
        <div className="pro_project">
          프로젝트 경력 (총 6개월)
          <ul>
            <li>Onsikgo (2022.07.04 ~ 2022.08.19)</li>
            <li>MLBTI (2022.08.22 ~ 2022.10.07)</li>
            <li>D-station (2022.10.11 ~ 2022.11.18)</li>
            <li>Portfolio (2022.12.02 ~ 2022.12.~)</li>
          </ul>
        </div>
        <div>
          <div>
            학력
            <h4>동아대학교 경영학과 -20.08 졸</h4>
            <h4>양산고등학교 -14.02 졸</h4>
          </div>
          <div>
            기타
            <h4>SSAFY 7기 과정 -22.12 진행 중</h4>
          </div>
        </div>
      </div>
      <div className="skill">
        <div>
          <img src="./assets/html.png" alt="" />
          <div className="percent"></div>
        </div>
        <div>
          <img src="./assets/python.png" alt="" />
          <div className="percent"></div>
        </div>
        <div>
          <img src="./assets/vue.png" alt="" />
          <div className="percent"></div>
        </div>
        <div>
          <img src="./assets/react.png" alt="" />
          <div className="percent"></div>
        </div>
        <div>
          <img src="./assets/git.png" alt="" />
          <div className="percent"></div>
        </div>
        <div>지라, slack, github, gitlab, js, django, css </div>
      </div>
    </MyProfileContainer>
  );
};

export default MyProfile;
