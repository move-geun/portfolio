import styled from "styled-components";

const MyProfileContainer = styled.div`
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
  }

  .profile {
    width: 150px;
    height: 250px;
  }

  .aboutme {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
  }
  .skill {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    text-align: center;

    img {
      width: 100px;
      height: 100px;
      margin: 0 10px;
    }

    .skilllist {
      display: flex;
      flex-direction: row;
      align-items: center;
    }
  }
`;

const ChatBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  bottom: 0%;
  left: 3%;
  background-color: black;
  opacity: 0;
  animation: viewer 0.8s steps(22) forwards alternate;
  animation-delay: 4.2s;

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

export { MyProfileContainer, ChatBox };
