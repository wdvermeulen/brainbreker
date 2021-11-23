import React from "react";
import "./SetupBar.scss";
import AutosizeInput from "react-input-autosize/lib/AutosizeInput";
import {
  checkTypeEnum,
  questionTypeEnum,
} from "../../../../sharedResources/enum";
import {
  useName,
  useHasTimeLimit,
  useTimeLimit,
  useCheckType,
  usePointsForSpeed,
  useNumberOfOptions,
  useAnswerValue,
  useQuestionTitle,
  useSlideNavigation,
  useRemoveSlide,
  useResetSlide,
  useSaveQuiz,
  useQuestionType,
} from "../hooks";
import { useFormInputWithSet } from "../../../../Utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faSave,
  faTrash,
  faUndo,
} from "@fortawesome/free-solid-svg-icons";

const SetupBar = ({ collapse, collapsed }) => {
  const name = useName();
  const questionTitle = useQuestionTitle().value;
  const questionType = useQuestionType();
  const hasTimeLimit = useHasTimeLimit();
  const timeLimit = useTimeLimit();
  const checkType = useCheckType();
  const pointsForSpeed = usePointsForSpeed();
  const numberOfOptions = useNumberOfOptions();
  const answerValue = useAnswerValue();
  const slideNavigation = useSlideNavigation();

  const resetSlide = useResetSlide();
  const removeSlide = useRemoveSlide();
  const saveQuiz = useSaveQuiz();

  const { setValue, ...selectAnswer } = useFormInputWithSet(0);

  if (selectAnswer.value >= numberOfOptions.value)
    setValue(numberOfOptions.value - 1);

  let predefinedAnswer = checkType.value === "PREDEFINED_ANSWER";

  return (
    <div id="SetupBar">
      <button className="menubutton secondary" onClick={collapse}>
        <FontAwesomeIcon icon={collapsed ? faChevronLeft : faChevronRight} />
      </button>
      <div
        className="collapsible-container"
        style={{
          maxWidth: collapsed ? "0" : "340px",
        }}
      >
        <div className="glass-container">
          <h3>
            Instellingen voor {slideNavigation.currentSlide + 1}.{" "}
            {questionTitle}
          </h3>
          <button className="outline" onClick={resetSlide}>
            <FontAwesomeIcon icon={faUndo} /> Reset
          </button>
          <button className="outline" onClick={removeSlide}>
            <FontAwesomeIcon icon={faTrash} /> Verwijderen
          </button>

          <hr />

          <div className="row">
            <label htmlFor="questionType">Soort vraag: </label>
            <select
              id="questionType"
              name="questionType"
              aria-label="soort vraag"
              {...questionType}
            >
              {Object.entries(questionTypeEnum).map(([key, type]) => (
                <option key={"questionType-" + key} value={key}>
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
              type="number"
              min="1"
              max="99"
              {...numberOfOptions}
            />
          </div>

          <hr />

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
                  type="number"
                  min="5"
                  max="1800"
                  {...timeLimit}
                />{" "}
                seconden
              </>
            )}
          </div>

          <hr />

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

          <hr />

          <h3>Overzicht</h3>
          {slideNavigation.slides.map((slide, i) => {
            return (
              <div
                className="row"
                key={slide.title + i}
                onClick={() => {
                  slideNavigation.gotoSlide(i);
                }}
              >
                {i + 1}. {slide.title}
              </div>
            );
          })}
          <button
            className="secondary"
            onClick={slideNavigation.gotoPreviousSlide}
          >
            <FontAwesomeIcon icon={faChevronLeft} /> Vorige
          </button>
          <button onClick={slideNavigation.gotoNextSlide}>
            Volgende vraag <FontAwesomeIcon icon={faChevronRight} />
          </button>
          <label htmlFor="title">Naam van deze quiz: </label>
          <AutosizeInput
            id="numberOfOptions"
            name="numberOfOptions"
            aria-label="Aantal opties"
            type="text"
            {...name}
          />
          <button onClick={saveQuiz}>
            <FontAwesomeIcon icon={faSave} /> Opslaan
          </button>
        </div>
      </div>
    </div>
  );
};

export default SetupBar;
