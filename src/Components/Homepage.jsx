import React from 'react';
import styled from 'styled-components';
import Section from './home/Section';
import Calendar from './home/Calendar';

export default function Homepage() {
  return (
    <Container>
      <Section label="Announcements" color="#663399">
        <div>text</div>
      </Section>
      <Section label="Calendar" color="#32CD32">
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
