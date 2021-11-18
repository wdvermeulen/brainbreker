import React from "react";
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
  useSlideNavigation,
} from "../hooks";
import { useFormInputWithSet } from "../../../../Utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const SetupBar = ({ collapse, collapsed }) => {
  const questionTitle = useQuestionTitle().value;
  const hasTimeLimit = useHasTimeLimit();
  const timeLimit = useTimeLimit();
  const autoCheck = useAutoCheck();
  const pointsForSpeed = usePointsForSpeed();
  const numberOfOptions = useNumberOfOptions();
  const answerValue = useAnswerValue();
  const slideNavigation = useSlideNavigation();

  const { setValue, ...selectAnswer } = useFormInputWithSet(0);

  if (selectAnswer.value >= numberOfOptions.value)
    setValue(numberOfOptions.value - 1);

  return (
    <div id="SetupBar">
      <button className="secondary menubutton" onClick={collapse}>
        <FontAwesomeIcon icon={collapsed ? faChevronLeft : faChevronRight} />
      </button>
      <div
        className="collapsible-container"
        style={{
          maxWidth: collapsed ? "0" : "340px",
        }}
      >
        <div className="glass-container">
          <h3>Instellingen voor {questionTitle}</h3>
          <button className="outline">Reset</button>
          <button className="outline">Verwijderen</button>

          <div className="row">
            <label htmlFor="questionType">Soort vraag: </label>
            <select
              id="questionType"
              name="questionType"
              aria-label="soort vraag"
            >
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
              aria-label="Aantal opties"
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
              aria-label="heeft een tijdslimiet"
              type="checkbox"
              {...hasTimeLimit}
            />
            <label htmlFor="hasTimeLimit">Heeft een tijdslimiet</label>
          </div>

          <div className="row">
            {hasTimeLimit.checked && (
              <>
                <label htmlFor="timeLimit">Tijdslimiet: </label>
                <AutosizeInput
                  id="timeLimit"
                  name="timeLimit"
                  aria-label="tijdslimiet in seconden"
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
              aria-label="automatisch controleren"
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
                  aria-label="Punten voor snelheid"
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
                <label htmlFor="correctAnswer">Juiste antwoord: </label>
                <select
                  id="correctAnswer"
                  aria-label="Juiste antwoord"
                  {...selectAnswer}
                >
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
                <label htmlFor="rewardValue">
                  {pointsForSpeed.checked ? "Maximale b" : "B"}eloning voor
                  Antwoord {parseInt(selectAnswer.value) + 1}:
                </label>
                <AutosizeInput
                  id="rewardValue"
                  text="number"
                  value={answerValue.values[selectAnswer.value]}
                  onChange={(e) => {
                    answerValue.onChange(selectAnswer.value, e.target.value);
                  }}
                />
                punt{answerValue.values[selectAnswer.value] !== "1" && "en"}
              </>
            )}
          </div>

          {autoCheck.checked &&
            answerValue.values.map((value, i) => {
              if (
                parseInt(selectAnswer.value) !== i &&
                value !== 0 &&
                i < numberOfOptions.value
              ) {
                return (
                  <div className="row" key={"answerValue-" + i}>
                    <label htmlFor={"answerValue-" + i}>
                      {pointsForSpeed.checked ? "Maximale b" : "B"}eloning voor
                      Antwoord {i + 1}:
                    </label>
                    <AutosizeInput
                      id={"answerValue-" + i}
                      text="number"
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

          <button
            className="secondary"
            onClick={slideNavigation.gotoPreviousSlide}
          >
            Vorige
          </button>
          <button onClick={slideNavigation.gotoNextSlide}>
            Volgende vraag
          </button>

          <hr />

          <h3>Overzicht</h3>
        </div>
      </div>
    </div>
  );
};

export default SetupBar;
