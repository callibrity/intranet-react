import React, { useContext } from "react";
import styled from "styled-components";
import { UserContext } from "./UserContext";
import { useGoogleLogout } from "react-google-login";

export default function Logout() {
  const { setUsername, setUserEmail } = useContext(UserContext);
  const {signOut} = useGoogleLogout({
    clientId:"1084859424709-tk8745k1d0bnqfvlmsoa0j3uo5bkm9un.apps.googleusercontent.com",
    onLogoutSuccess:() => {
      setUsername(null);
      setUserEmail(null);
    }
  });

  return(
    <Container onClick={signOut}>Sign Out</Container>
  );
}

const Container = styled.div`

`;