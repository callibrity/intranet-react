import React from "react";
import styled from "styled-components";

export default function InfoItem({label, data}){
  return(
    <Container>
      <Label>{label}</Label>
      <Data>{data}</Data>
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 5px;
`;

const Label = styled.div`
  font-weight: 700;
`;

const Data = styled.data``;