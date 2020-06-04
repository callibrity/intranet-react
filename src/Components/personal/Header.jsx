import React, {useContext} from "react";
import styled from "styled-components";
import API from "../../globals/api";
import { standardButton } from "../../globals/styles";
import { UserContext, ProfileContext } from "../../globals/UserContext";

export default function Header(){
  const { userEmail } = useContext(UserContext);
  const {employee, editMode, setEditMode} = useContext(ProfileContext);

  function handleEditClick(){
    setEditMode(!editMode);
  }
  
  function handleSaveClick(){
    API.put(`/employees?name=${employee.name}`, employee)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    
    setEditMode(false);
  }

  function editButtons() {
    if(employee.callibrity_email === userEmail){
      return(
        <>
          <Button onClick={handleEditClick}>{editMode ? "Cancel Editing" : "Edit Resume"}</Button>
          {editMode && <Button onClick={handleSaveClick}>Save Resume</Button>}
        </>
      );
    } else return null;
  }

  return(
    <Container>
      <Title>RESUME</Title>
      {editButtons()}
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
  ${standardButton};
  font-size: 16px;
  padding: 3px 5px;
  margin-right: 20px;
`;