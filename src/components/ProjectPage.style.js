import styled from "styled-components";

const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 95%;
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
    overflow: hidden;
    animation: typing 1.2s steps(22) forwards alternate;
  }
`;

const ChatBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  position: absolute;
  bottom: 10%;
  left: 3%;
  background-color: black;
  opacity: 0;
  animation: viewer 0.8s steps(22) forwards alternate;
  animation-delay: 2s;

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

export { ProjectContainer, ChatBox };
