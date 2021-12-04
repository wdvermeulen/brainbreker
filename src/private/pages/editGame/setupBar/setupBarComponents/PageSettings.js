import React from "react";
import { pageTypeEnum } from "../../../../../sharedResources/enum";

const PageSettings = ({ pageType }) => (
  <div className="row">
    <label htmlFor="pageType">Soort vraag: </label>
    <select
      id="pageType"
      name="pageType"
      aria-label="soort vraag"
      {...pageType}
    >
      {Object.entries(pageTypeEnum).map(([key, type]) => (
        <option key={"pageType-" + key} value={key}>
          {type}
        </option>
      ))}
    </select>
  </div>
);

export default PageSettings;
