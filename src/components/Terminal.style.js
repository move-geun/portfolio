import styled from "styled-components";

const TerminalContainer = styled.div`
  display: grid;
  grid-template-columns: 130px 60% 20%;
  position: absolute;
  top: 0;
  width: 100%;
  height: 30px;
  background-color: #303134;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;

  .status {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    color: white;

    div {
      width: 15px;
      height: 15px;
      border-radius: 50%;
      margin: 7px;
    }

    .redone {
      background-color: #f0665c;
    }
    .yellowone {
      background-color: #e4be4d;
    }
    .greenone {
      background-color: #77bf47;
    }
  }
`;

export { TerminalContainer };
