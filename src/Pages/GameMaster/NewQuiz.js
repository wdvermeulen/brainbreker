import React, { useState } from "react";
import { I18n } from "aws-amplify";
import "./NewQuiz.scss";

const NewQuiz = () => {
  const title = useFormInput(I18n.get("Question") + " 1");
  const question = useFormInput(
    I18n.get("Tap on text to edit. Swipe to go to the next question.")
  );
  const answers = useFormInput([
    I18n.get(["Answer"]),
    I18n.get(["Answer"]),
    I18n.get(["Answer"]),
    I18n.get(["Answer"]),
  ]);

  const sqrtAnswers = Math.ceil(Math.sqrt(answers.length));

  const Answers = () => {
    const array = [];
    for (let i = 0; i < sqrtAnswers; i++) {
      array.push(
        <div className="row">
          <button onClick={console.log}>{answers[i].value}</button>
          <button onClick={console.log}>{answers[i].value}</button>
        </div>
      );
    }
    return array;
  };

  const [editing, setEditing] = useState("");

  return (
    <div className="container">
      <div className="top half">
        <div className="glass-tile">
          {editing === "title" ? (
            <>
              <label htmlFor="title">Naam vraag: </label>
              <input
                autoFocus
                id="title"
                type="text"
                onBlur={() => {
                  setEditing("");
                }}
                {...title}
              />
            </>
          ) : (
            <h2
              onClick={() => {
                setEditing("title");
              }}
            >
              {title.value}
            </h2>
          )}
          <textarea
            autoFocus
            id="question"
            name="question"
            onBlur={() => {
              setEditing("");
            }}
            {...question}
          />
          {editing === "question" ? (
            <>
              <label htmlFor="question">Vraag: </label>
            </>
          ) : (
            <div
              onClick={() => {
                setEditing("question");
              }}
            >
              {question.value}
            </div>
          )}
        </div>
      </div>
      <div className="bottom half">
        <Answers />
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
