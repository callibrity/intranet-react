import React, { useContext } from "react";
import styled from "styled-components";
import { UserContext } from "../UserContext";
import { useGoogleLogin } from "react-google-login";
import {googleClientId} from "../../constants";

export default function Login() {
  const { setUsername, setUserEmail } = useContext(UserContext);
  const { signIn } = useGoogleLogin({
    clientId: googleClientId,
    onSuccess: ({profileObj: {name, email}}) => {
      setUsername(name);
      setUserEmail(email);
    },
    isSignedIn: true
  });

  return (
    <Container>
      <Welcome>Welcome to Callibrity!</Welcome>
      <SignIn onClick={signIn} >Sign In</SignIn>
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

const Welcome = styled.h2`
  margin-bottom: 30px;
`;

const SignIn = styled.div`
  border: 1px solid black;
  box-shadow: 0 1px 1px black, 0 2px 5px rgba(0,0,0,0.6), 0 4px 10px rgba(0,0,0,0.2);
  border-color: rgba(0,0,0,0.2) rgba(0,0,0,0.35) rgba(0,0,0,0.55);
  border-bottom-width: 2px;
  color: white;
  transition: background-color .5s;
  cursor: pointer;
  background-color: ${({ theme: { darkerBlue } }) => darkerBlue};
  padding: .66em .9em;
  border-radius: 5px;
  font-size: 1em;
  font-weight: 700;

  :hover{
    background-color: ${({ theme: { blue } }) => blue};
  }
`;
