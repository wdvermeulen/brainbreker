import React from "react";
import "./SetupButton.scss";

const SetupButton = () => (
  <div id="SetupButton" className="column">
    <button className="outline">
      <svg
        aria-hidden="true"
        data-prefix="fal"
        data-icon="sliders-h"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        height="32px"
      >
        <path
          fill="currentColor"
          d="M504 384H192v-40c0-13-11-24-24-24h-48c-13 0-24 11-24 24v40H8c-4 0-8 4-8 8v16c0 4 4 8 8 8h88v40c0 13 11 24 24 24h48c13 0 24-11 24-24v-40h312c4 0 8-4 8-8v-16c0-4-4-8-8-8zm-344 64h-32v-96h32v96zM504 96H256V56c0-13-11-24-24-24h-48c-13 0-24 11-24 24v40H8c-4 0-8 4-8 8v16c0 4 4 8 8 8h152v40c0 13 11 24 24 24h48c13 0 24-11 24-24v-40h248c4 0 8-4 8-8v-16c0-4-4-8-8-8zm-280 64h-32V64h32v96zm280 80h-88v-40c0-13-11-24-24-24h-48c-13 0-24 11-24 24v40H8c-4 0-8 4-8 8v16c0 4 4 8 8 8h312v40c0 13 11 24 24 24h48c13 0 24-11 24-24v-40h88c4 0 8-4 8-8v-16c0-4-4-8-8-8zm-120 64h-32v-96h32v96z"
        />
      </svg>
    </button>
  </div>
);

export default SetupButton;
