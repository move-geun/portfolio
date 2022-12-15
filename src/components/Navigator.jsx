import React from "react";
import { Navigator } from "./Navigator.style";

const Navigator = ({ name }) => {
  return (
    <Navigator>
      <div className="status">
        <div className="redone"></div>
        <div className="yellowone"></div>
        <div className="greenone"></div>
      </div>
      <div className="title">{name}</div>
      <div></div>
    </Navigator>
  );
};
export default Navigator;
