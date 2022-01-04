import {
  FormControl,
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
        <InputLabel id="pageTypeSelect">Soort vraag</InputLabel>
        <Select
          labelId="pageTypeSelect"
          name="pageType"
          aria-label="soort vraag"
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
            <InputAdornment position="end">antwoorden</InputAdornment>
          ),
        }}
        type="number"
        inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
        min={1}
        max={99}
        {...numberOfOptions}
        fullWidth
      />
    </ListItem>
  </>
);

export default PageSettings;
