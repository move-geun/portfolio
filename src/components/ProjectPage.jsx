import React from "react";
import { ProjectContainer, ChatBox } from "./ProjectPage.style";

const ProjectPage = ({ project }) => {
  const title = `< Project_${project.title} / >`;
  return (
    <ProjectContainer>
      <h3 className="title">{title}</h3>
      <ChatBox>
        <div className="hbox">
          <h5 className="firsth">DonggeunLee : </h5>
          <h5 className="sech"> `~/portfolio/Project/${project.title}`</h5>
        </div>
        <label htmlFor="navi">
          <input type="text" id="navi" placeholder={project.next} />
        </label>
      </ChatBox>
    </ProjectContainer>
  );
};
export default ProjectPage;
