import React from "react";
import styled from "styled-components";


export default function PeopleSearch({name, setName}){

  return(
    <Container>
      <Search value={name} onChange={(e) => setName(e.target.value)} />
    </Container>

  );
}

const Container = styled.div``;

const Search = styled.textarea`
  
`;