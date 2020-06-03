import React from "react";
import styled from "styled-components";
import { standardInput } from "../../globals/styles";

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
  ${standardInput}
`;