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
    overflow: visible;
    width: 100%;
    opacity: 0;
    white-space: nowrap;
    animation: typing 1.2s steps(22) forwards alternate;
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
    opacity: 0;
    animation: viewer 0.3s steps(22) forwards alternate;
    animation-delay: 0.1s;

    .sayHello {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      height: 100%;
      font-size: 1.3rem;
    }
  }
  .skill {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    opacity: 0;
    align-items: center;
    text-align: center;
    animation: viewer 0.3s steps(22) forwards alternate;
    animation-delay: 0.1s;

    img {
      width: 100px;
      height: 100px;
      margin: 0 10px;
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
  .error {
    h4,
    h5 {
      margin: 0;
    }
    h5 {
      margin-top: 3px;
    }
    position: absolute;
    bottom: -77%;
    color: tomato;
    animation: viewer 0.8s steps(22) forwards alternate;
  }
`;

const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const FlexCol = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  li {
    margin: 5px 0px;
  }
`;

export { MyProfileContainer, ChatBox, FlexRow, FlexCol };
