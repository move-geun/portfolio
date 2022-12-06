import styled from "styled-components";

const MainContainer = styled.div``;

const Introduce = styled.div`
  height: 500px;
  width: 800px;
  margin: 0 auto;
  margin-top: 50px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: black;
  border-radius: 10px;
  opacity: 0;
  transition: 1s;

  .active {
    opacity: 1;
  }
`;

const DesignContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;

  .item {
    background-color: white;
    min-width: 300px;
    height: 300px;
    border-radius: 30px;
    margin: 0 20px 20px 20px;
    /* overflow-x: scroll; */
    opacity: 0;
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

  .active {
    opacity: 1;
  }
`;

export { MainContainer, Introduce, DesignContainer };
