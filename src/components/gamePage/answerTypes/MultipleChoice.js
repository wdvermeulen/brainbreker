import { styled } from "@stitches/react";
import React from "react";
import Col from "../../Col";
import MultipleChoiceButton from "./MultipleChoiceButton";

const StyledAnswers = styled(Col, {
  flexGrow: "2",

  "&::before": {
    content: "",
    width: "100%",
    height: "$1",
    backgroundColor: "$light",
    borderRadius: "$1",
  },

  ".row": {
    // disabled because this order is the
    // only way to get the desired effect
    // eslint-disable-next-line
    "&:first-of-type": {
      "button.answer": {
        borderTopRightRadius: "$0",
        borderTopLeftRadius: "$0",
      },
    },

    "button.answer:first-of-type": {
      borderTopLeftRadius: "$0",
      borderBottomLeftRadius: "$0",
      marginLeft: "$0",
    },

    // eslint-disable-next-line
    "&:last-of-type": {
      "button.answer": {
        borderBottomRightRadius: "$0",
        borderBottomLeftRadius: "$0",
      },
    },

    "button.answer:last-of-type": {
      borderTopRightRadius: "$0",
      borderBottomRightRadius: "$0",
      marginRight: "$0",
    },

    // eslint-disable-next-line
    "&:first-of-type": {
      "button.answer:first-of-type": {
        borderTopLeftRadius: "$3",
      },

      "button.answer:last-of-type": {
        borderTopRightRadius: "$3",
      },
    },

    // eslint-disable-next-line
    "&:last-of-type": {
      "button.answer:first-of-type": {
        borderBottomLeftRadius: "$3",
      },

      "button.answer:last-of-type": {
        borderBottomRightRadius: "$3",
      },
    },
  },
});

const MultipleChoice = ({ numberOfOptions: { value }, ...props }) => {
  const rows = [];

  for (let i = 0; i < value; i++) {
    if (i % 2 === 1) {
      rows.push(
        <div className="row" key={"AnswersRow" + i}>
          <MultipleChoiceButton i={i - 1} {...props} />
          <MultipleChoiceButton i={i} {...props} />
        </div>
      );
    } else if (i === value - 1) {
      rows.push(
        <div className="row" key={"AnswersRow" + i}>
          <MultipleChoiceButton i={i} {...props} />
        </div>
      );
    }
  }

  return (
    <StyledAnswers className="section" gap="small">
      {rows}
    </StyledAnswers>
  );
};

export default MultipleChoice;
