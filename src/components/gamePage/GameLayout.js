import { Collapse } from "@mui/material";
import React, { useEffect, useState } from "react";
import { timeSteps } from "../../sharedResources/constants";
import { styled } from "../../sharedStyles/theme";
import MultipleChoice from "./answerTypes/MultipleChoice";
import Questions from "./Question";
import Col from "../Col";
import Status from "./Status";

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

const GameLayout = ({ timeLimit, ...props }) => {
  const [secondsRemaining, setSecondsRemaining] = useState(
    timeSteps[timeLimit.value]
  );

  useEffect(() => {
    if (timeLimit.value !== false)
      setSecondsRemaining(timeSteps[timeLimit.value]);
  });

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     if (secondsRemaining) setSecondsRemaining(secondsRemaining - 1);
  //   }, 1000);
  //
  //   if (secondsRemaining <= 0) clearTimeout(timer);
  //   return () => clearTimeout(timer);
  // });

  return (
    <StyledGameLayout className="column">
      <Questions {...props} />
      <Collapse in={timeLimit.value !== false}>
        <Status
          totalSeconds={timeSteps[timeLimit.value]}
          secondsRemaining={secondsRemaining}
        />
      </Collapse>
      <MultipleChoice {...props} />
    </StyledGameLayout>
  );
};

export default GameLayout;
