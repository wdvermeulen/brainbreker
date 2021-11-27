import React from "react";
import { I18n } from "aws-amplify";
import "../sharedStyles/normalize.css";
import "./App.scss";
import * as STRINGS from "../strings.json";
import SiteRoute from "../SiteRoute";

I18n.setLanguage("nl");
I18n.putVocabulariesForLanguage("nl", STRINGS.nl);

const App = () => (
  <div className="App">
    <SiteRoute />
  </div>
);

export default App;
