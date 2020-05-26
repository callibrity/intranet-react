/* global gapi */

import React, { useEffect, useContext } from "react";
import styled from "styled-components";
import {UserContext} from "./UserContext";

function insertGoogleApiScript(setSignedIn) {
  const script = document.createElement("script");
  script.src = "https://apis.google.com/js/platform.js";
  script.onload = () => {
    initializeGoogleSignIn(setSignedIn);
  };

  document.body.appendChild(script);
}

function initializeGoogleSignIn(setSignedIn) {
  window.gapi.load("auth2", () => {
    window.gapi.auth2.init({
      client_id:
        "1084859424709-tk8745k1d0bnqfvlmsoa0j3uo5bkm9un.apps.googleusercontent.com",
    }).then(() => {
      const authInstance =  window.gapi.auth2.getAuthInstance();
      const isSignedIn = authInstance.isSignedIn.get();
      setSignedIn(isSignedIn);

      authInstance.isSignedIn.listen(isSignedIn => {
        setSignedIn(isSignedIn);
      });
    });
  });

  window.gapi.load("signin2", () => {
      window.gapi.signin2.render("loginButton");
    });
}

export function signOut() {
  gapi.auth2.getAuthInstance().signOut();
}

export default function Login() {
  const [signedIn, setSignedIn] = useContext(UserContext);

  useEffect(() => {
    insertGoogleApiScript(setSignedIn);
  }, []);

  return (
    <Container>
      <h2>Welcome to Callibrity!</h2>
      <div id="loginButton"></div>
    </Container>
  )
}

const Container = styled.div`
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
`;
