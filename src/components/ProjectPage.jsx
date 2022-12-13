import React, { useEffect, useState, useRef } from "react";
import {
  ProjectContainer,
  ProjectBox,
  FlexRow,
  ChatBox,
} from "./ProjectPage.style";

const ProjectPage = ({ project }) => {
  const carouselRef = useRef();
  const [currentCnt, setCurrentCnt] = useState(0);

  const changeGif = (cnt) => {
    const item = document.querySelector(`#btn${project.name}${currentCnt}`);
    item.className = "carousel-btn";
    setCurrentCnt(cnt);
  };

  useEffect(() => {
    const item = document.querySelector(`#btn${project.name}${currentCnt}`);
    item.className = "carousel-btn active";

    carouselRef.current.style.transition = "all 0.6s ease-in-out";
    carouselRef.current.style.transform = `translateX(-${
      currentCnt * carouselRef.current?.clientWidth
    }px)`;
  }, [currentCnt, project, carouselRef]);
  const title = `< Project_${project.title} / >`;

  return (
    <ProjectContainer>
      <h3 className="title">{title}</h3>
      <ProjectBox>
        <div className="titlebox">{project.title}</div>
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
                  arr.push(
                    <img
                      className="project-png"
                      src={
                        process.env.PUBLIC_URL +
                        `/assets/images/${project.name}/${i}.gif`
                      }
                      alt="gif"
                    />
                  );
                }
                return arr;
              })()}
            </div>

            <div className="carousel-buttons">
              {(() => {
                let arr = [];
                for (let i = 0; i <= project.gifcount; i++) {
                  arr.push(
                    <div
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
      </ProjectBox>
      <ChatBox>
        <div className="hbox">
          <h5 className="firsth">DonggeunLee : </h5>
          <h5 className="sech"> ~/portfolio/Project/${project.title}/</h5>
        </div>
        <label htmlFor="navi">
          <input type="text" id="navi" placeholder={project.next} />
        </label>
      </ChatBox>
    </ProjectContainer>
  );
};
export default ProjectPage;
