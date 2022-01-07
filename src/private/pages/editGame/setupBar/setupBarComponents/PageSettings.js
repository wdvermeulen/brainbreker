import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import RemoveCircleRoundedIcon from "@mui/icons-material/RemoveCircleRounded";
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  ListItem,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React from "react";
import { pageTypeDefinition } from "../../../../../sharedResources/constants";

const PageSettings = ({ pageType, numberOfOptions }) => (
  <>
    <ListItem>
      <FormControl fullWidth>
        <InputLabel id="pageTypeSelect">Soort pagina</InputLabel>
        <Select
          labelId="pageTypeSelect"
          name="pageType"
          aria-label="soort pagina"
          {...pageType}
        >
          {Object.entries(pageTypeDefinition).map(([key, type]) => (
            <MenuItem key={"pageType-" + key} value={key}>
              {type}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </ListItem>

    <ListItem>
      <TextField
        label="Aantal opties"
        InputProps={{
          endAdornment: (
            <>
              <InputAdornment position="end">antwoorden</InputAdornment>
              <IconButton
                onClick={() => numberOfOptions.set(numberOfOptions.value - 1)}
              >
                <RemoveCircleRoundedIcon />
              </IconButton>
              <IconButton
                onClick={() =>
                  numberOfOptions.set(parseInt(numberOfOptions.value) + 1)
                }
              >
                <AddCircleRoundedIcon />
              </IconButton>
            </>
          ),
        }}
        type="number"
        inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
        min={1}
        max={99}
        value={numberOfOptions.value}
        onChange={() => numberOfOptions.set(numberOfOptions.value)}
        fullWidth
      />
    </ListItem>
  </>
);

export default PageSettings;
