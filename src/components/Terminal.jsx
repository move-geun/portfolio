import React from "react";
import { TerminalContainer } from "./Terminal.style";

const Terminal = () => {
  return (
    <TerminalContainer>
      <div className="status">
        <div className="redone"></div>
        <div className="yellowone"></div>
        <div className="greenone"></div>
      </div>
    </TerminalContainer>
  );
};
export default Terminal;
