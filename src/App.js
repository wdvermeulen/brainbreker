import React from "react";
import "./App.scss";
import Amplify, { I18n } from "aws-amplify";
import awsconfig from "./aws-exports";
import * as STRINGS from "./strings.json";
import SiteRoute from "./SiteRoute";

Amplify.configure(awsconfig);
I18n.setLanguage("nl");
I18n.putVocabulariesForLanguage("nl", STRINGS.nl);

const App = () => (
  <div className="App">
    <SiteRoute />
  </div>
);

export default App;
