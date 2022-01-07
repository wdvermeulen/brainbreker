import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import RemoveCircleRoundedIcon from "@mui/icons-material/RemoveCircleRounded";
import {
  Collapse,
  FormControl,
  IconButton,
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
  hasTimeLimit,
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

    <Collapse in={predefinedAnswer}>
      <ListItem disablePadding>
        <List sx={{ width: "100%" }}>
          {answerValue.values.map((value, i) => (
            <ListItem key={"answerValue-" + i}>
              <TextField
                label={
                  pointsForSpeed.checked && hasTimeLimit.checked
                    ? "Maximale beloning voor antwoord " + (i + 1)
                    : "Beloning voor antwoord " + (i + 1)
                }
                InputProps={{
                  endAdornment: (
                    <>
                      <InputAdornment position="end">punten</InputAdornment>
                      <IconButton
                        onClick={() =>
                          answerValue.onChange(i, answerValue.values[i] - 1)
                        }
                      >
                        <RemoveCircleRoundedIcon />
                      </IconButton>
                      <IconButton
                        onClick={() =>
                          answerValue.onChange(
                            i,
                            parseInt(answerValue.values[i]) + 1
                          )
                        }
                      >
                        <AddCircleRoundedIcon />
                      </IconButton>
                    </>
                  ),
                }}
                type="number"
                inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
                min={-99}
                max={99}
                value={answerValue.values[i]}
                onChange={(e) => {
                  answerValue.onChange(i, e.target.value);
                }}
                color={
                  answerValue.values[i] > 0
                    ? "success"
                    : answerValue.values[i] < 0
                    ? "error"
                    : "primary"
                }
                focused={!!answerValue.values[i]}
                size="small"
                InputLabelProps={{ shrink: true }}
                fullWidth
              />
            </ListItem>
          ))}
        </List>
      </ListItem>
    </Collapse>
  </>
);

export default ScoreSettings;
