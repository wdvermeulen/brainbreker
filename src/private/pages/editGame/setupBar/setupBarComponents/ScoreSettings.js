import {
  FormControl,
  InputAdornment,
  InputLabel,
  List,
  ListItem,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React from "react";
import { checkTypeDefinition } from "../../../../../sharedResources/constants";

const ScoreSettings = ({
  checkType,
  predefinedAnswer,
  pointsForSpeed,
  answerValue,
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
      <ListItem disablePadding>
        <List sx={{ width: "100%" }}>
          {answerValue.values.map((value, i) => (
            <ListItem className="row" key={"answerValue-" + i}>
              <TextField
                label={
                  pointsForSpeed.checked
                    ? "Maximale beloning voor antwoord " + (i + 1)
                    : "Beloning voor antwoord " + (i + 1)
                }
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">punten</InputAdornment>
                  ),
                }}
                type="number"
                inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
                min={-9999}
                max={9999}
                value={answerValue.values[i]}
                onChange={(e) => {
                  answerValue.onChange(i, e.target.value);
                }}
                size="small"
                fullWidth
              />
            </ListItem>
          ))}
        </List>
      </ListItem>
    )}
  </>
);

export default ScoreSettings;
