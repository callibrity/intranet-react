import React from "react";
import styled from "styled-components";
import { standardButton } from "../../globals/styles";

const buttonList = [
  {
    label: "Cincinnati",
    value: "Cincinnati"
  },
  {
    label: "Columbus",
    value: "Columbus"
  },
  {
    label: "All",
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
`;

const ButtonFilter = styled.div`
  ${standardButton};
`;