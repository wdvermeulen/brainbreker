import React, { useState } from "react";
import { I18n } from "aws-amplify";

const NewQuiz = () => {
  const title = useFormInput(I18n.get("Question") + " 1");
  const question = useFormInput(
    I18n.get("Tap on text to edit. Drag to go to the next question")
  );
  const answer = useFormInput(I18n.get("Answer"));

  const [editing, setEditing] = useState();

  return (
    <div className="container">
      <div className="top half">
        {editing === "title" ? (
          <h2
            onClick={() => {
              setEditing("title");
            }}
          >
            {title.value}
          </h2>
        ) : (
          <>
            <label for="title">Naam vraag:</label>
            <input id="title" type="text" {...title} />
          </>
        )}
        <div onClick={console.log}>{question.value}</div>
      </div>
      <div className="bottom half">
        <div className="row">
          <button onClick={console.log}>{answer.value}</button>
          <button onClick={console.log}>{answer.value}</button>
        </div>
        <div className="row">
          <button onClick={console.log}>{answer.value}</button>
          <button onClick={console.log}>{answer.value}</button>
        </div>
      </div>
    </div>
  );
};

function useFormInput(defaultState) {
  const [value, setValue] = useState(defaultState);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return { value, onChange: handleChange };
}

export default NewQuiz;
