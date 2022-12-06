import styled from "styled-components";

const MyProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  white-space: nomal;
  word-break: normal;

  .skill {
    display: flex;
    flex-direction: row;
    align-items: center;
    img {
      width: 70px;
      height: 70px;
    }
  }
`;

export { MyProfileContainer };
