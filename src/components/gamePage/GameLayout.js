import React from "react";
import Answers from "./Answers";
import Questions from "./Question";
import "./GameLayout.scss";

const GameLayout = (props) => (
  <div id="GameLayout" className="page column">
    <Questions {...props} />
    <Answers {...props} />
  </div>
);

export default GameLayout;
