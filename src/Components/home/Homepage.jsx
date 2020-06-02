import React from "react";
import styled from "styled-components";
import Section from "./Section";
import Calendar from "./Calendar";
import Announcements from "./Announcements";

export default function Homepage() {
  return (
    <Container>
      <Section label="Announcements" color='green'>
        <Announcements />
      </Section>
      <Section label="Calendar" color='orange'>
        <Calendar />
      </Section>
    </Container>
  );
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: 50px;
`;
