import React from "react";
import styled from "styled-components";
import { standardButton } from "../../globals/styles";

const buttonList = [
  {
    label: "CINCINNATI",
    value: "Cincinnati"
  },
  {
    label: "COLUMBUS",
    value: "Columbus"
  },
  {
    label: "ALL",
    value: ""
  }
];

export default function LocationButtons({location, setLocation}){

  const list = buttonList.map(({label, value}) => 
    <ButtonFilter key={label} value={value} location={location} onClick={() => setLocation(value)}>
      {label}
    </ButtonFilter>
  );

  return(
    <Container>
      {list}
    </Container>

  );
}

const Container = styled.div`
  margin-top: 20px;
  display: flex;
  margin-bottom: 20px;
  padding-left: 10px;
`;

const ButtonFilter = styled.div`
  ${standardButton};
  background-color: ${({location, value, theme : {blue, darkerBlue}}) => location === value ? blue : darkerBlue};
  font-size: 16px;
  padding: 3px 5px;
  margin-right: 20px;
`;