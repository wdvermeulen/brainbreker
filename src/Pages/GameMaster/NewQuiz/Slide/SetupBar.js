import React, { useState } from "react";
import "./SetupBar.scss";
import AutosizeInput from "react-input-autosize/lib/AutosizeInput";
import { questionTypes } from "../../../../sharedResources/enum";
import {
  useHasTimeLimit,
  useTimeLimit,
  useAutoCheck,
  usePointsForSpeed,
  useNumberOfOptions,
  useAnswerValue,
  useQuestionTitle,
} from "./hooks";
import { useFormInput } from "../../../../Utils";

const SetupBar = ({ collapse, collapsed }) => {
  const questionTitle = useQuestionTitle().value;
  const hasTimeLimit = useHasTimeLimit();
  const timeLimit = useTimeLimit();
  const autoCheck = useAutoCheck();
  const pointsForSpeed = usePointsForSpeed();
  const numberOfOptions = useNumberOfOptions();
  const answerValue = useAnswerValue();

  const selectAnswer = useFormInput(0);

  return (
    <>
      <button className="outline menubutton" onClick={collapse}>
        Menu {collapsed ? "uit" : "in"}klappen
      </button>
      <div id="SetupBar" style={{ right: collapsed ? "-350px" : "-20px" }}>
        <div className="row">
          <h3>Instellingen voor {questionTitle}</h3>
          <button className="outline" onClick={collapse}>
            Menu {collapsed ? "uit" : "in"}klappen
          </button>
        </div>

        <div className="row">
          <label htmlFor="questionType">Soort vraag: </label>
          <select id="questionType" name="questionType">
            {Object.entries(questionTypes).map(([, type], i) => (
              <option key={"questionType-" + i} value={i}>
                {type}
              </option>
            ))}
          </select>
        </div>

        <div className="row">
          <label htmlFor="numberOfOptions">Aantal opties: </label>
          <AutosizeInput
            id="numberOfOptions"
            name="numberOfOptions"
            text="number"
            min="1"
            max="99"
            {...numberOfOptions}
          />
        </div>

        <div className="row">
          <input
            id="hasTimeLimit"
            name="hasTimeLimit"
            type="checkbox"
            {...hasTimeLimit}
          />
          <label htmlFor="hasTimeLimit">Heeft een tijdslimiet</label>
        </div>

        <div className="row">
          {hasTimeLimit.checked && (
            <>
              <label htmlFor="timeLimit">Tijd voor deze vraag: </label>
              <AutosizeInput
                id="timeLimit"
                name="timeLimit"
                text="number"
                min="5"
                max="1800"
                {...timeLimit}
              />{" "}
              seconden
            </>
          )}
        </div>

        <div className="row">
          <input
            id="autoCheck"
            name="autoCheck"
            type="checkbox"
            {...autoCheck}
          />
          <label htmlFor="autoCheck">Automatisch controleren</label>
        </div>

        <div className="row">
          {hasTimeLimit.checked && autoCheck.checked && (
            <>
              <input
                id="pointsForSpeed"
                name="pointsForSpeed"
                type="checkbox"
                {...pointsForSpeed}
              />
              <label htmlFor="pointsForSpeed">Punten voor snelheid</label>
            </>
          )}
        </div>

        <div className="row">
          {autoCheck.checked && (
            <>
              <label>Juiste antwoord: </label>
              <select {...selectAnswer}>
                {answerValue.values.map((value, i) => (
                  <option key={"answerValue-" + i} value={i}>
                    {"Antwoord " + (i + 1)}
                  </option>
                ))}
              </select>
            </>
          )}
        </div>

        <div className="row">
          {autoCheck.checked && (
            <>
              Beloning voor Antwoord {parseInt(selectAnswer.value) + 1}:
              <AutosizeInput
                text="number"
                value={answerValue.values[selectAnswer.value]}
                onChange={(e) => {
                  answerValue.onChange(selectAnswer.value, e.target.value);
                }}
              />{" "}
              punt{answerValue.values[selectAnswer.value] !== "1" && "en"}
            </>
          )}
        </div>

        {autoCheck.checked &&
          answerValue.values.map((value, i) => {
            if (parseInt(selectAnswer.value) !== i && value !== 0) {
              return (
                <div className="row" key={"answerValue-" + i}>
                  Beloning voor Antwoord {i + 1}:
                  <AutosizeInput
                    text="number"
                    value={answerValue.values[i]}
                    onChange={(e) => {
                      answerValue.onChange(i, e.target.value);
                    }}
                  />{" "}
                  punt{answerValue.values[i] !== "1" && "en"}
                </div>
              );
            }
            return null;
          })}

        <button className="secondary">Vorige</button>
        <button>Volgende vraag</button>
      </div>
    </>
  );
};

export default SetupBar;
