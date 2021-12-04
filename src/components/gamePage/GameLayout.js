import React from "react";
import MultipleChoice from "./answerTypes/MultipleChoice";
import Questions from "./Question";
import "./GameLayout.scss";

const GameLayout = (props) => (
  <div id="GameLayout" className="page column">
    <Questions {...props} />
    <MultipleChoice {...props} />
  </div>
);

export default GameLayout;
