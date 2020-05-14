import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Section from './home/Section';
import Calendar from './home/Calendar';

export default function Homepage() {
  const [text, setText] = useState('Loading');
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/announcements`)
      .then((res) => {
        setText(res.data);
      })
      .catch((err) => {
        setText(err);
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
