import React from "react";
import styled from "styled-components";


export default function PeopleSearch({name, setName}){

  return(
    <Container>
      <Label>Search:</Label>
      <Search 
        type="search"
        value={name} 
        onChange={(e) => setName(e.target.value)} 
      />
    </Container>

  );
}

const Container = styled.div`
  display: flex;
  margin: 20px;
  align-items: center;
`;

const Label = styled.div``;

const Search = styled.input`
  height: 25px;
  box-shadow: inset 0 1px 0 rgba(0, 0, 0, 0.1);
  border-color: #bbbbbb #cfcfcf #e0e0e0 #cfcfcf;
  border-radius: 3px;
  padding: 5px;
`;