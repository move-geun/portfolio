import styled from "styled-components";

const ContactContainer = styled.div`
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
`;

const FlexCol = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  opacity: 0;
  margin: 0 auto;
  animation: viewer 0.8s steps(22) forwards alternate;
  animation-delay: 0.3s;

  .item {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    margin: 10px auto;
    width: 500px;

    .imgcase {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .imgbox {
      width: 80px;
      height: 80px;
    }
    .imgtitle {
      margin-top: 10px;
      font-size: 1.5rem;
      font-weight: 700;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .content {
      font-size: 1.5rem;
      margin-left: 3rem;
      color: #cac7bc;
    }
  }
`;

const ChatBox = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
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
    bottom: -3%;
    color: tomato;
    animation: viewer 0.8s steps(22) forwards alternate;
  }
`;
export { ContactContainer, ChatBox, FlexCol };
