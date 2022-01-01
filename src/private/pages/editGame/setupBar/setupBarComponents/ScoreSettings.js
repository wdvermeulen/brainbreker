import {
  FormControl,
  FormControlLabel,
  InputLabel,
  ListItem,
  MenuItem,
  Select,
  Switch,
  TextField,
} from "@mui/material";
import React from "react";
import AutosizeInput from "react-input-autosize";
import {
  checkTypeDefinition,
  pageTypeDefinition,
} from "../../../../../sharedResources/constants";

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
    <ListItem>
      <FormControl fullWidth>
        <InputLabel id="checkType">Controleren: </InputLabel>
        <Select
          labelId="checkType"
          name="checkType"
          aria-label="Manier van controleren"
          {...checkType}
        >
          {Object.entries(checkTypeDefinition).map(([key, type]) => (
            <MenuItem key={"checkType-" + key} value={key}>
              {type}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </ListItem>

    {predefinedAnswer && (
      <ListItem>
        <FormControl fullWidth>
          <InputLabel id="correctAnswer">Punten voor antwoord: </InputLabel>
          <Select
            labelId="correctAnswer"
            name="correctAnswer"
            aria-label="Juiste antwoord"
            {...selectAnswer}
          >
            {answerValue.values.map((value, i) => (
              <MenuItem key={"answerValue-" + i} value={i}>
                {"antwoord " + (i + 1)}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </ListItem>
    )}

    {predefinedAnswer && (
      <ListItem>
        <TextField
          type="number"
          label={
            pointsForSpeed.checked
              ? "Maximale beloning voor antwoord " +
                (parseInt(selectAnswer.value) + 1)
              : "Beloning voor antwoord " + (parseInt(selectAnswer.value) + 1)
          }
          value={answerValue.values[selectAnswer.value]}
          onChange={(e) => {
            answerValue.onChange(selectAnswer.value, e.target.value);
          }}
          fullWidth
        />
      </ListItem>
    )}

    {predefinedAnswer &&
      answerValue.values.map((value, i) => {
        if (
          parseInt(selectAnswer.value) !== i &&
          value !== 0 &&
          i < numberOfOptions.value
        ) {
          return (
            <ListItem key={"answerValue-" + i}>
              <TextField
                type="number"
                label={
                  pointsForSpeed.checked
                    ? "Maximale beloning voor antwoord " + (i + 1)
                    : "Beloning voor antwoord " + (i + 1)
                }
                value={answerValue.values[i]}
                onChange={(e) => {
                  answerValue.onChange(i, e.target.value);
                }}
                fullWidth
              />
            </ListItem>
          );
        }
        return null;
      })}
  </>
);

export default ScoreSettings;
