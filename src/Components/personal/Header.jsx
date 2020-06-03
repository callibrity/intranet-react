import React from "react";
import styled from "styled-components";
import { standardButton } from "../../globals/styles";

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
  ${standardButton}
`;