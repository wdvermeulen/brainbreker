import colors from "../../../enums/orderedAnswerAttributes.json";
import React from "react";

const Button = ({ editing, setEditing, answer, i }) => (
  <button
    onClick={() => {
      setEditing("answers" + i);
    }}
    style={{
      borderColor: colors[i].color,
      boxShadow: "0 5px 0 0 " + colors[i].color,
    }}
    key={i}
  >
    {editing === "answer" + i ? (
      <>
        <label htmlFor={"answer" + i}>Antwoord {i + 1}: </label>
        <input
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
