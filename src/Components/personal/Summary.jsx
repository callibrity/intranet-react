import React from "react";
import styled from "styled-components";
import InfoItem from "./InfoItem";

const infoList = [
  {
    label: "NAME",
    data: "name"
  },
  {
    label: "ROLE",
    data: "role"
  },
  {
    label: "OFFICE",
    data: "office"
  }
];

export default function Summary({employee}){
  const info = infoList.map(({label, data}) => 
    <InfoItem key={label} label={label} data={employee[data]} />
  );

  return(
    <Container>
      <Title>PROFESSIONAL DETAILS</Title>
      <Image src={employee.photo} />
      <InfoContainer>
        {info}
      </InfoContainer>
    </Container>
  );
}

const Container = styled.div`
  display: inline-block;
  margin: 20px 0;
  background-color: white;
  border-bottom: 1px solid rgba(0,0,0,0.4);
  border-radius: 5px;
`;

const Title = styled.div`
  width: 100%;
  text-align: center;
  font-weight: 700;
  font-size: 20px;
  margin: 10px 0;
`;

const Image = styled.img`
  width: 100%;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  justify-content: center;
`;