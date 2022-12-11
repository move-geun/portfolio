import React from "react";
import { OnskigoContainer, ChatBox } from "./Onsikgo.style";

const Onsikgo = () => {
  const title = "< Project_Onsikgo / >";
  return (
    <OnskigoContainer>
      <h3 className="title">{title}</h3>
      <ChatBox>
        <div className="hbox">
          <h5 className="firsth">DonggeunLee : </h5>
          <h5 className="sech"> ~/portfolio/Project/Onsikgo/</h5>
        </div>
        <label htmlFor="navi">
          <input type="text" id="navi" placeholder="MLBTI" />
        </label>
      </ChatBox>
    </OnskigoContainer>
  );
};
export default Onsikgo;
