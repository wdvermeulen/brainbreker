import colors from "../../../enums/orderedAnswerAttributes.json";
import React from "react";
import AutosizeInput from "react-input-autosize/lib/AutosizeInput";

const Button = ({ editing, setEditing, answer, i }) => (
  <button
    onClick={() => {
      setEditing("answer" + i);
    }}
    style={{
      borderColor: colors[i % colors.length].color,
      boxShadow: "0 5px 0 0 " + colors[i % colors.length].color,
    }}
    key={i}
  >
    {editing === "answer" + i ? (
      <>
        <label htmlFor={"answer" + i}>Antwoord {i + 1}: </label>
        <AutosizeInput
          autoFocus
          id={"answer" + i}
          type="text"
          onBlur={() => {
            setEditing("");
          }}
          {...answer}
        />
      </>
    ) : (
      <>
        <h3>{i + 1}</h3>
        {answer.value}
      </>
    )}
  </button>
);

export default Button;
