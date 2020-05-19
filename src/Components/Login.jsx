import React, { useEffect } from "react";

function insertGoogleApiScript() {
  const script = document.createElement("script");
  script.src = "https://apis.google.com/js/platform.js";
  script.onload = () => {
    initializeGoogleSignIn();
  };

  document.body.appendChild(script);
}

function initializeGoogleSignIn() {
  window.gapi.load("auth2", () => {
    window.gapi.auth2.init({
      client_id:
        "1084859424709-tk8745k1d0bnqfvlmsoa0j3uo5bkm9un.apps.googleusercontent.com",
    });

    console.log("initialized");

    window.gapi.load("signin2", () => {
      const params = {
        onsuccess: () => {
          console.log("Signed in");
        },
      };

      window.gapi.signin2.render("loginButton", params);
    });
  });
}

export default function Login() {
  useEffect(() => {
    insertGoogleApiScript();
  });

  return (
    <div id="loginButton"></div>
  );
}
