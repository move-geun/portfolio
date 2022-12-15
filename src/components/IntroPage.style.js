import styled from "styled-components";

const TextCase = styled.div`
  position: absolute;
  top: 10%;
  left: 3%;
  margin: 15px 0;

  div {
    margin: 15px 0;
  }

  .int1 {
    width: 100%;
    opacity: 0;
    border-right: white;
    white-space: nowrap;
    overflow: hidden;
    animation: typing 0.5s steps(22) forwards alternate;
  }

  .int2 {
    width: 100%;
    opacity: 0;
    border-right: white;
    white-space: nowrap;
    overflow: hidden;
    animation: typing 0.5s steps(22) forwards alternate;
    animation-delay: 0.5s;
  }
  .int3 {
    width: 100%;
    opacity: 0;
    border-right: white;
    white-space: nowrap;
    overflow: hidden;
    animation: typing 0.5s steps(22) forwards alternate;
    animation-delay: 1s;
  }
  .int4 {
    width: 100%;
    opacity: 0;
    border-right: white;
    white-space: nowrap;
    overflow: hidden;
    animation: typing 0.5s steps(22) forwards alternate;
    animation-delay: 1.5s;
  }
  .int5 {
    width: 100%;
    opacity: 0;
    border-right: white;
    white-space: nowrap;
    overflow: hidden;
    animation: typing 0.5s steps(22) forwards alternate;
    animation-delay: 2s;
  }
`;

const DesignContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  align-items: center;
  top: 50%;
  opacity: 0;
  animation: viewer 0.5s steps(22) forwards alternate;
  animation-delay: 2.5s;

  .itemCase {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h5 {
      margin: 0;
    }
  }

  .item {
    background-color: white;
    width: 80px;
    height: 80px;
    border-radius: 30px;
    margin: 0 20px 20px 20px;
    transform: scale(1);
    transition: 2s;
    box-shadow: 5px -5px 5px -5px #333;
    color: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    &:hover {
      transform: scale(1.2);
      transition: 0.5s;
      cursor: pointer;
    }

    img {
      width: 60%;
      height: 60%;
      object-fit: cover;
    }
  }

  .onsikgo {
    background-color: rgb(140, 184, 131);
  }

  .dstation {
    background-color: black;
  }
`;

const ChatBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  position: absolute;
  bottom: 15%;
  left: 3%;
  background-color: black;
  opacity: 0;
  animation: viewer 0.5s steps(22) forwards alternate;
  animation-delay: 3s;

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
    bottom: -35%;
    color: tomato;
    animation: viewer 0.8s steps(22) forwards alternate;
  }
`;

export { TextCase, DesignContainer, ChatBox };
