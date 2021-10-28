import React from "react";
import "./App.css";
import Amplify, { I18n } from "aws-amplify";
import { AmplifySignOut } from "@aws-amplify/ui-react";
import { AuthState, onAuthUIStateChange } from "@aws-amplify/ui-components";
import awsconfig from "./aws-exports";
import Auth from "./Auth";
import * as STRINGS from "./strings.json";

Amplify.configure(awsconfig);
I18n.setLanguage("nl");
I18n.putVocabulariesForLanguage("nl", STRINGS.nl);

const App = () => {
  const [authState, setAuthState] = React.useState();
  const [user, setUser] = React.useState();

  React.useEffect(() => {
    return onAuthUIStateChange((nextAuthState, authData) => {
      setAuthState(nextAuthState);
      setUser(authData);
    });
  }, []);

  return authState === AuthState.SignedIn && user ? (
    <div className="App">
      <div>Welkom, {user.attributes.email}</div>
      <AmplifySignOut buttonText={I18n.get("Sign Out")} />
    </div>
  ) : (
    <Auth />
  );
};

export default App;
