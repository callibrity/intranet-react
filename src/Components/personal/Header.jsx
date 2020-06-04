import React, {useContext} from "react";
import styled from "styled-components";
import API from "../../globals/api";
import { standardButton } from "../../globals/styles";
import { UserContext } from "../../globals/UserContext";

export default function Header({employee}){
  const { userEmail } = useContext(UserContext);

  function handleClick(){
    API.put(`/employees?name=${employee.name}`, employee)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }

  function EditButtons() {
    if(employee.callibrity_email === userEmail){
      return(
        <>
          <Button>Edit Resume</Button>
          <Button onClick={handleClick}>Save Resume</Button>
        </>
      );
    } else return null;
  }

  return(
    <Container>
      <Title>RESUME</Title>
      <EditButtons />
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