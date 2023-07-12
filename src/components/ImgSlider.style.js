import styled from "styled-components";

const SliderContainer = styled.div`
  width: 750px;
  display: flex;
  justify-content: center;
  .slideWrap {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
  }

  img {
    width: 100px;
    height: 100px;
    margin: 0 10px;
  }
`;

export { SliderContainer };
