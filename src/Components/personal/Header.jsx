import React from "react";
import styled from "styled-components";

export default function Header(){
  return(
    <Container>
      <Title>RESUME</Title>
      <EditButton>EDIT RESUME</EditButton>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 20px 0;
`;

const Title = styled.div`
  font-size: 30px;
  font-weight: 900;
  margin-right: 50px;
`;

const EditButton = styled.div`
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
`;