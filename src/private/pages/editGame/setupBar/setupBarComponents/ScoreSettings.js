import React from "react";
import AutosizeInput from "react-input-autosize";
import { checkTypeEnum } from "../../../../../sharedResources/constants";

const ScoreSettings = ({
  checkType,
  hasTimeLimit,
  predefinedAnswer,
  pointsForSpeed,
  selectAnswer,
  answerValue,
  numberOfOptions,
}) => (
  <>
    <div className="row">
      <label htmlFor="checkType">Controleren: </label>
      <select
        id="checkType"
        name="checkType"
        aria-label="Manier van controleren"
        {...checkType}
      >
        {Object.entries(checkTypeEnum).map(([key, type]) => (
          <option key={"checkType-" + key} value={key}>
            {type}
          </option>
        ))}
      </select>
    </div>

    <div className="row">
      {hasTimeLimit.checked && predefinedAnswer && (
        <>
          <input
            id="pointsForSpeed"
            name="pointsForSpeed"
            aria-label="Punten voor snelheid"
            type="checkbox"
            {...pointsForSpeed}
          />
          <label htmlFor="pointsForSpeed">Punten voor snelheid</label>
        </>
      )}
    </div>

    <div className="row">
      {predefinedAnswer && (
        <>
          <label htmlFor="correctAnswer">Punten voor: </label>
          <select
            id="correctAnswer"
            aria-label="Juiste antwoord"
            {...selectAnswer}
          >
            {answerValue.values.map((value, i) => (
              <option key={"answerValue-" + i} value={i}>
                {"antwoord " + (i + 1)}
              </option>
            ))}
          </select>
        </>
      )}
    </div>

    <div className="row">
      {predefinedAnswer && (
        <>
          <label htmlFor="rewardValue">
            {hasTimeLimit.checked && pointsForSpeed.checked
              ? "Maximale b"
              : "B"}
            eloning voor antwoord {parseInt(selectAnswer.value) + 1}:
          </label>
          <AutosizeInput
            id="rewardValue"
            type="number"
            value={answerValue.values[selectAnswer.value]}
            onChange={(e) => {
              answerValue.onChange(selectAnswer.value, e.target.value);
            }}
          />
          punt{answerValue.values[selectAnswer.value] !== "1" && "en"}
        </>
      )}
    </div>

    {predefinedAnswer &&
      answerValue.values.map((value, i) => {
        if (
          parseInt(selectAnswer.value) !== i &&
          value !== 0 &&
          i < numberOfOptions.value
        ) {
          return (
            <div className="row" key={"answerValue-" + i}>
              <label htmlFor={"answerValue-" + i}>
                {hasTimeLimit.checked && pointsForSpeed.checked
                  ? "Maximale b"
                  : "B"}
                eloning voor antwoord {i + 1}:
              </label>
              <AutosizeInput
                id={"answerValue-" + i}
                type="number"
                value={answerValue.values[i]}
                onChange={(e) => {
                  answerValue.onChange(i, e.target.value);
                }}
              />
              punt{answerValue.values[i] !== "1" && "en"}
            </div>
          );
        }
        return null;
      })}
  </>
);

export default ScoreSettings;
