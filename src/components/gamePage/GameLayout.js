import React from "react";
import { styled } from "../../sharedStyles/theme";
import MultipleChoice from "./answerTypes/MultipleChoice";
import Questions from "./Question";
import Col from "../Col";

const StyledGameLayout = styled(Col, {
  maxHeight: "100%",
  maxWidth: "$columnMaxWidth",
  margin: "0 auto",
  padding: "$3",
  overflow: "auto",

  "@keyframes fade-in": {
    from: {
      maxHeight: "0",
      opacity: "0",
    },
    to: {
      maxHeight: "5rem",
      opacity: "1",
    },
  },

  label: {
    display: "block",
    animationName: "fade-in",
    animationDuration: ".3s",
  },
});

const GameLayout = (props) => (
  <StyledGameLayout className="page column">
    <Questions {...props} />
    <MultipleChoice {...props} />
  </StyledGameLayout>
);

export default GameLayout;
