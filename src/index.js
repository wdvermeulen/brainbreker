import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import Amplify, { I18n } from "aws-amplify";
import { ThemeProvider } from "@mui/material";
import PeerConnection from "./peer/PeerConnection";
import reportWebVitals from "./reportWebVitals";
import config from "./aws-exports";
import muiTheme from "./sharedStyles/muiTheme";
import SiteRoute from "./SiteRoute";
import store from "./store";
import "./sharedStyles/normalize.css";
import "./index.scss";
import * as STRINGS from "./strings.json";

Amplify.configure(config);

I18n.setLanguage("nl");
I18n.putVocabulariesForLanguage("nl", STRINGS.nl);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={muiTheme}>
        <PeerConnection>
          <SiteRoute />
        </PeerConnection>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
