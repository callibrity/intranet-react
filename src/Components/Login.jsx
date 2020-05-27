import React, { useContext } from "react";
import styled from "styled-components";
import { UserContext } from "./UserContext";
import { useGoogleLogin } from "react-google-login";

export default function Login() {
  const { setSignedIn, setUsername, setUserEmail } = useContext(UserContext);
  const { signIn } = useGoogleLogin({
    clientId: "1084859424709-tk8745k1d0bnqfvlmsoa0j3uo5bkm9un.apps.googleusercontent.com",
    onSuccess: ({profileObj: {name, email}}) => {
      setSignedIn(true);
      setUsername(name);
      setUserEmail(email);
    },
    onFailure: (response) => console.log(response),
    isSignedIn: true
  });

  return (
    <Container>
      <h2>Welcome to Callibrity!</h2>
      <SignIn onClick={signIn} >SIGN IN</SignIn>
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

const SignIn = styled.div`
background-color: red;
color: white;
`;
