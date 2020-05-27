import React, { useContext } from "react";
import styled from "styled-components";
import { UserContext } from "./UserContext";
import { useGoogleLogout } from "react-google-login";

export default function Logout() {
  const { setSignedIn } = useContext(UserContext);
  const {signOut, loaded} = useGoogleLogout({
    clientId:"1084859424709-tk8745k1d0bnqfvlmsoa0j3uo5bkm9un.apps.googleusercontent.com",
    onLogoutSuccess:() => setSignedIn(false)
  });

  return(
    <Container onClick={signOut}>SIGN OUT</Container>
  );
}

const Container = styled.div`
  background-color: red;
  height: 100px;
  width: 100px;
`;



/*
    <GoogleLogout
      clientId="1084859424709-tk8745k1d0bnqfvlmsoa0j3uo5bkm9un.apps.googleusercontent.com"
      buttonText="Logout"
      onLogoutSuccess={() => setSignedIn(false)}
    />
*/