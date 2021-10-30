import React, { useEffect, useState } from "react";
import { Auth, I18n } from "aws-amplify";
import { AuthState, onAuthUIStateChange } from "@aws-amplify/ui-components";
import {
  AmplifyAuthenticator,
  AmplifyConfirmSignIn,
  AmplifySignIn,
  AmplifySignOut,
  AmplifySignUp,
} from "@aws-amplify/ui-react";
import "./Authenticated.scss";

const Authenticated = ({ children }) => {
  const [authState, setAuthState] = useState();
  const [user, setUser] = useState();

  useEffect(() => {
    if (authState === undefined) {
      // Because it sometimes wouldn't render: https://github.com/aws-amplify/docs/issues/2895
      Auth.currentAuthenticatedUser().then((authData) => {
        setAuthState(AuthState.SignedIn);
        setUser(authData);
      });
    }
    return onAuthUIStateChange((nextAuthState, authData) => {
      setAuthState(nextAuthState);
      setUser(authData);
    });
  });

  return authState === AuthState.SignedIn && user ? (
    <>
      <div className="logout-bar">
        <div>{user?.attributes.email}</div>
        <AmplifySignOut buttonText={I18n.get("Sign Out")} />
      </div>
      {children}
    </>
  ) : (
    <AmplifyAuthenticator usernameAlias="email">
      <AmplifySignIn
        slot="sign-in"
        usernameAlias="email"
        formFields={[
          {
            type: "email",
            label: I18n.get("Email *"),
            placeholder: I18n.get("Enter your email address"),
            inputProps: { required: true, autocomplete: "username" },
          },
          {
            type: "password",
            label: I18n.get("Password *"),
            placeholder: I18n.get("Enter your password"),
            inputProps: { required: true, autocomplete: "new-password" },
          },
        ]}
      />
      <AmplifySignUp
        slot="sign-up"
        usernameAlias="email"
        formFields={[
          {
            type: "email",
            label: I18n.get("Email *"),
            placeholder: I18n.get("Enter your email address"),
            inputProps: { required: true, autocomplete: "username" },
          },
          {
            type: "password",
            label: I18n.get("Password *"),
            placeholder: I18n.get("Enter your password"),
            inputProps: { required: true, autocomplete: "new-password" },
          },
          {
            type: "phone_number",
            label: I18n.get(
              "Phone Number (optional, for account recovery and MFA)"
            ),
            placeholder: I18n.get("(555) 555-1212"),
            dialCode: 31,
          },
        ]}
        submitButtonText={I18n.get("Create")}
      />
      <AmplifyConfirmSignIn
        headerText="Verifiëer uw email"
        slot="confirm-sign-in"
        formFields={[
          {
            type: "text",
            label: "Verificatiecode die naar u gemaild is",
            placeholder: "XXXXXX",
          },
        ]}
      />
    </AmplifyAuthenticator>
  );
};

export default Authenticated;
