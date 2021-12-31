import {
  FormControl,
  InputLabel,
  ListItem,
  MenuItem,
  Select,
} from "@mui/material";
import React from "react";
import { pageTypeDefinition } from "../../../../../sharedResources/constants";

const PageSettings = ({ pageType }) => (
  <ListItem>
    <FormControl fullWidth>
      <InputLabel id="pageTypeSelect">Soort vraag:</InputLabel>
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
);

export default PageSettings;
