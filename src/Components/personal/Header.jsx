import React from "react";
import styled from "styled-components";
import API from "../../globals/api";
import { standardButton } from "../../globals/styles";

export default function Header({employee}){

  function handleClick(){
    API.put(`/employees?name=${employee.name}`, employee)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }

  return(
    <Container>
      <Title>RESUME</Title>
      <Button>EDIT RESUME</Button>
      <Button onClick={handleClick}>Save RESUME</Button>
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

const Button = styled.div`
  ${standardButton}
`;