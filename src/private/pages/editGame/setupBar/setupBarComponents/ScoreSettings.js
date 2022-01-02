import {
  FormControl,
  FormControlLabel,
  InputLabel,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
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
