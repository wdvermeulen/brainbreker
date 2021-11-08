import React from "react";
import "../sharedStyles/normalize.css";
import "./App.scss";
import { I18n } from "aws-amplify";
import * as STRINGS from "../strings.json";
import SiteRoute from "./SiteRoute";

I18n.setLanguage("nl");
I18n.putVocabulariesForLanguage("nl", STRINGS.nl);

const App = () => (
  <div className="App">
    <SiteRoute />
  </div>
);

export default App;
