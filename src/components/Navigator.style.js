import styled from "styled-components";

const NavigatorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: 0;
  width: 110px;
  height: 530px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-radius: 10px;
  background-color: black;
  position: absolute;
  left: 13%;
  top: 13%;
  box-shadow: 5px 5px 5px -5px #333;
  animation: viewer 0.8s steps(22) forwards alternate;
  animation-delay: 3s;

  .itemCase {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 7px 0;
    h6 {
      margin: 5px 0 0 0;
    }
  }
  .marbox {
    margin-top: 50px;
  }

  .item {
    background-color: white;
    width: 45px;
    height: 45px;
    border-radius: 30px;
    margin: 0;
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

  .hello {
    background-color: #e4be4d;
  }
`;

export { NavigatorContainer };
