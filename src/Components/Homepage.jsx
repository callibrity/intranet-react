import React, { useState, useEffect } from 'react';
import API from '../api';
import styled from 'styled-components';
import Section from './home/Section';
import Calendar from './home/Calendar';

export default function Homepage() {
  const [text, setText] = useState('Loading');
  useEffect(() => {
    API.get('/announcements')
      .then((res) => {
        setText(res.data);
      })
      .catch((err) => {
        console.log(err);
        setText('Could not retrieve announcements');
      });
  }, []);

  const announcements = typeof text === 'string'
    ? text
    : text.map((ele) => (
      <Text>
        {`${ele.date}: ${ele.event}`}
      </Text>
    ));

  return (
    <Container>
      <Section label="Announcements" color="#663399">
        {announcements}
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

const Text = styled.div`

`;
