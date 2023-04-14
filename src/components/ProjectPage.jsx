import React, { useEffect, useState, useRef } from "react";
import {
  ProjectContainer,
  ProjectBox,
  FlexRow,
  ChatBox,
} from "./ProjectPage.style";
import { useRecoilState } from "recoil";
import { NowPage } from "../recoil/atoms";

const ProjectPage = ({ project }) => {
  const carouselRef = useRef();
  const [currentCnt, setCurrentCnt] = useState(0);
  const [nowPage, setNowPage] = useRecoilState(NowPage);
  const [tmpSearch, setTmpSearch] = useState("");
  const [noindex, setNoindex] = useState(false);

  const search = (e) => {
    e.preventDefault();
    let index = e.target.value.toLowerCase();
    setTmpSearch(index);
  };

  const goReadme = (e, link) => {
    e.preventDefault();
    window.open(link, "_blank");
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

  const changeGif = (cnt) => {
    const item = document.querySelector(`#btn${project.name}${currentCnt}`);
    item.className = "carousel-btn";
    setCurrentCnt(cnt);
  };

  useEffect(() => {
    const item = document.querySelector(`#btn${project.name}${currentCnt}`);
    const pic = document.querySelector(".project-png");
    let wid = pic.clientWidth;
    item.className = "carousel-btn active";
    carouselRef.current.style.transition = "all 0.6s ease-in-out";
    // 온식고일 떄만 또 조정하기
    if (nowPage === "onsikgo") {
      if (currentCnt === 4) {
        carouselRef.current.style.transform = `translateX(-${
          currentCnt * wid + 180
        }px)`;
      } else {
        carouselRef.current.style.transform = `translateX(-${
          currentCnt * wid + 16.9
        }px)`;
      }
    } else {
      carouselRef.current.style.transform = `translateX(-${
        currentCnt * wid
      }px)`;
    }
  }, [currentCnt, project, carouselRef]);

  const title = `< Project_${project.title} / >`;

  return (
    <ProjectContainer>
      <h3 className="title">{title}</h3>
      <ProjectBox>
        <div className="titlebox">
          {project.title}
          <button onClick={(e) => goReadme(e, project.github)}>README</button>
        </div>
        <div className="subtitlebox">{project.subtitle}</div>
        <p>
          {project.date} {`( ${project.member}인 프로젝트 )`}
        </p>
        <FlexRow>
          <div className="carousel-container">
            <div className="carousel" ref={carouselRef}>
              {(() => {
                let arr = [];
                for (let i = 0; i <= project.gifcount; i++) {
                  if (nowPage === "onsikgo") {
                    arr.push(
                      <img
                        key={i}
                        className="project-png onsikgo"
                        src={
                          process.env.PUBLIC_URL +
                          `/assets/${project.name}/${i}.gif`
                        }
                        alt="gif"
                      />
                    );
                  } else {
                    arr.push(
                      <img
                        key={i}
                        className="project-png"
                        src={
                          process.env.PUBLIC_URL +
                          `/assets/${project.name}/${i}.gif`
                        }
                        alt="gif"
                      />
                    );
                  }
                }
                return arr;
              })()}
            </div>
            <div className="carousel-buttons">
              {(() => {
                let arr = [];
                for (let i = 0; i <= project.btncount; i++) {
                  arr.push(
                    <div
                      key={i}
                      className="carousel-btn"
                      id={`btn${project.name}${i}`}
                      onClick={() => changeGif(i)}
                    />
                  );
                }
                return arr;
              })()}
            </div>
          </div>
          <div
            className="project_content"
            dangerouslySetInnerHTML={{ __html: project.content }}
          ></div>
        </FlexRow>
        <div
          className="project_role"
          dangerouslySetInnerHTML={{ __html: project.role }}
        ></div>
      </ProjectBox>
      <ChatBox>
        <div className="hbox">
          <h5 className="firsth">DonggeunLee : </h5>
          <h5 className="sech"> ~/portfolio/Project/{project.title}/</h5>
        </div>
        <label htmlFor="navi">
          <input
            type="text"
            id="navi"
            placeholder={project.next}
            onChange={(e) => search(e)}
            onKeyUp={(e) => goSearch(e)}
          />
        </label>
      </ChatBox>
      {noindex ? (
        <div className="error">
          <h4>Please search with the keyword below</h4>
          <h5>intro, aboutme, onsikgo, mlbti, dstation, contact</h5>
        </div>
      ) : null}
    </ProjectContainer>
  );
};
export default ProjectPage;
