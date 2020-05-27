import React, { useContext } from "react";
import styled from "styled-components";
import { UserContext } from "./UserContext";
import { GoogleLogin, GoogleLogout, useGoogleLogin } from "react-google-login";

const responseGoogle = (response) => {
  console.log(response);
};

export function Logout() {
  const { setSignedIn } = useContext(UserContext);
  return(
    <GoogleLogout
      clientId="1084859424709-tk8745k1d0bnqfvlmsoa0j3uo5bkm9un.apps.googleusercontent.com"
      buttonText="Logout"
      onLogoutSuccess={() => setSignedIn(false)}
    />
  );
}

export default function Login() {
  const loginSuccess = (response) => {
    const profile = response.profileObj;
    setUsername(profile.name);
    setUserEmail(profile.email);
    setSignedIn(true);
  };

  const { signIn, loaded } = useGoogleLogin({
    clientId: "1084859424709-tk8745k1d0bnqfvlmsoa0j3uo5bkm9un.apps.googleusercontent.com",
    onSuccess: loginSuccess,
    onFailure: responseGoogle,
    isSignedIn: true
  });

  const { setSignedIn, setUsername, setUserEmail } = useContext(UserContext);
  


  return (
    <Container>
      <h2>Welcome to Callibrity!</h2>
      <GoogleLogin
        id="loginButton"
        clientId="1084859424709-tk8745k1d0bnqfvlmsoa0j3uo5bkm9un.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={loginSuccess}
        onFailure={responseGoogle}
        isSignedIn={true}
      />
      <div onClick={signIn} >test </div>
    </Container>
  );
}

const Container = styled.div`
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
`;
