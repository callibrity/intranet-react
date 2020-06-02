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
  },
  {
    label: "EMAIL",
    data: "email"
  },
  {
    label: "SKILLS",
    data: "skills"
  },
  {
    label: "INTERESTS",
    data: "interests"
  }

];

export default function Details({employee}){

  const info = infoList.map(({label, data}) => 
    <InfoItem key={label} label={label} data={employee[data]} />
  );

  return(
    <Container>
      <Section>
        <Title>ABOUT ME</Title>
      </Section>
      <Section>
        <InfoContainer>
          {info}
        </InfoContainer>
      </Section>
      <LastSection>
        <BioContainer>
          {employee.bio}
        </BioContainer>
      </LastSection>
    </Container>
  );
}

const Container = styled.div`
  display: inline-block;
  margin: 20px 0;
  border-bottom: 1px solid rgba(0,0,0,0.4);
  border-radius: 5px;
  overflow: hidden;
`;

const Title = styled.div`
  width: 100%;
  text-align: center;
  font-weight: 700;
  font-size: 20px;
  padding: 10px 0;;
`;

const InfoContainer = styled.div`
  padding: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const Section = styled.div`
  background-color: white;
  margin-bottom: 3px;
`;

const LastSection = styled.div`
  background-color: white;
`;

const BioContainer = styled.div`
  padding: 20px;
`;