import { styled } from "@stitches/react";
import React from "react";
import Col from "../../Col";
import MultipleChoiceButton from "./MultipleChoiceButton";

const StyledAnswers = styled(Col, {
  flexGrow: "2",

  ".row": {
    gap: "$2",

    "&:first-of-type": {
      ".answer:first-of-type": {
        borderTopLeftRadius: "$3",
      },
      ".answer:last-of-type": {
        borderTopRightRadius: "$3",
      },
      ".answer:not(:last-of-type)": {
        borderTopRightRadius: "$0",
      },
      ".answer:not(:first-of-type)": {
        borderTopLeftRadius: "$0",
      },
    },
    "&:last-of-type": {
      ".answer:first-of-type": {
        borderBottomLeftRadius: "$3",
      },
      ".answer:last-of-type": {
        borderBottomRightRadius: "$3",
      },
      ".answer:not(:last-of-type)": {
        borderBottomRightRadius: "$0",
      },
      ".answer:not(:first-of-type)": {
        borderBottomLeftRadius: "$0",
      },
    },
    "&:not(:last-of-type)": {
      ".answer:first-of-type": {
        borderBottomLeftRadius: "$0",
      },
      ".answer:last-of-type": {
        borderBottomRightRadius: "$0",
      },
      ".answer:not(:last-of-type)": {
        borderBottomRightRadius: "$2",
      },
      ".answer:not(:first-of-type)": {
        borderBottomLeftRadius: "$2",
      },
    },
    "&:not(:first-of-type)": {
      ".answer:first-of-type": {
        borderTopLeftRadius: "$0",
      },
      ".answer:last-of-type": {
        borderTopRightRadius: "$0",
      },
      ".answer:not(:last-of-type)": {
        borderTopRightRadius: "$2",
      },
      ".answer:not(:first-of-type)": {
        borderTopLeftRadius: "$2",
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
    <StyledAnswers className="section" gap="medium">
      {rows}
    </StyledAnswers>
  );
};

export default MultipleChoice;
