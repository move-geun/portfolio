import styled from "styled-components";

const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  height: 85%;
  white-space: nomal;
  word-break: normal;
  position: absolute;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  top: 10%;
  left: 3%;

  .title {
    color: #f1cb6b;
    width: 100%;
    opacity: 0;
    white-space: nowrap;
    overflow: visible;
    animation: typing 1.2s steps(22) forwards alternate;
  }

  .error {
    transform: translateY(-18px);
    h4,
    h5 {
      margin: 0;
    }
    h5 {
      margin-top: 3px;
    }
    color: tomato;
    animation: viewer 0.8s steps(22) forwards alternate;
  }
`;

const ProjectBox = styled.div`
  width: 95%;
  height: 100%;
  display: flex;
  flex-direction: column;
  white-space: nomal;
  word-break: normal;
  align-items: center;
  justify-content: flex-start;
  position: relative;

  div {
    margin: 3px;
  }
  p {
    margin: 5px;
  }

  .titlebox {
    font-size: 2.5rem;
    font-weight: bold;
  }

  .subtitlebox {
    font-size: 1.3rem;
    font-weight: bold;
  }

  .project_role {
    width: 100%;
    text-align: left;
    h4 {
      margin: 0;
    }
    & > span {
      font-weight: bold;
    }
  }
`;

const ChatBox = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  align-items: center;
  bottom: 0;
  justify-content: flex-start;
  margin-top: 60px;
  background-color: black;
  opacity: 0;
  animation: viewer 0.8s steps(22) forwards alternate;
  animation-delay: 0.5s;

  .hbox {
    display: flex;
    flex-direction: row;
    align-items: center;
    h5 {
      margin-right: 5px;
    }

    .firsth {
      color: #7cc62e;
    }
    .sech {
      color: #647da9;
    }
  }
  input {
    background-color: black;
    color: white;
    min-width: 350px;
  }
`;

const FlexRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  .carousel-container {
    width: 50%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .project_content {
    text-align: start;
    height: 100%;
    width: 48%;
    padding-left: 10px;
    padding-top: 150px;
    word-break: normal;
    white-space: pre-line;
  }

  .carousel {
    width: 100%;
    height: 240px;
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .carousel-buttons {
    padding-top: 0.5rem;
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .carousel-btn {
    width: 10px;
    height: 10px;
    background-color: white;

    & + & {
      margin-left: 0.85rem;
    }

    &:hover {
      background-color: tomato;
    }

    &.active {
      background-color: yellow;
    }
  }

  .project-png {
    width: 100%;
    height: 100%;
    object-fit: cover;
    /* background-size: cover; */
  }

  .onsikgo {
    margin-right: 20px;
  }
`;

export { ProjectContainer, ProjectBox, FlexRow, ChatBox };
