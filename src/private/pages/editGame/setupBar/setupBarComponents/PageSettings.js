import React from "react";
import { pageTypeDefinition } from "../../../../../sharedResources/constants";

const PageSettings = ({ pageType }) => (
  <div className="row">
    <label htmlFor="pageType">Soort vraag: </label>
    <select
      id="pageType"
      name="pageType"
      aria-label="soort vraag"
      {...pageType}
    >
      {Object.entries(pageTypeDefinition).map(([key, type]) => (
        <option key={"pageType-" + key} value={key}>
          {type}
        </option>
      ))}
    </select>
  </div>
);

export default PageSettings;
