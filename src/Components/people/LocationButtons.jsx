import React from "react";
import styled from "styled-components";


export default function LocationButtons({location, setLocation}){

  return(
    <Container>
      <ButtonFilter value="Cincinnati" location={location} onClick={() => setLocation("Cincinnati")}>Cincinnati</ButtonFilter>
      <ButtonFilter value="Columbus" location={location} onClick={() => setLocation("Columbus")}>Columbus</ButtonFilter>
      <ButtonFilter value="" location={location} onClick={() => setLocation("")}>All</ButtonFilter>
    </Container>

  );
}

const Container = styled.div``;

const ButtonFilter = styled.div`
  border: 1px solid black;
  box-shadow: 0 1px 1px black, 0 2px 5px rgba(0,0,0,0.6), 0 4px 10px rgba(0,0,0,0.2);
  border-color: rgba(0,0,0,0.2) rgba(0,0,0,0.35) rgba(0,0,0,0.55);
  border-bottom-width: 2px;
  color: white;
  transition: background-color .5s;
  cursor: pointer;
  background-color: ${({value, location, theme:{blue, darkerBlue}}) => value === location ? blue : darkerBlue };
  padding: .66em .9em;
  border-radius: 5px;
  font-size: 1em;
  font-weight: 700;
  

  :hover{
    background-color: ${({ theme: { blue } }) => blue};
  }
`;