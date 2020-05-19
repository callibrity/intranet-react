import React, { useState, useEffect } from "react";
import API from "../api";
import styled from "styled-components";
import Section from "./home/Section";
import Calendar from "./home/Calendar";

export function createAnnouncementsList(text) {
  const typeCheck = typeof text === "string";
  if (typeCheck) {
    return text;
  }

  return text.map((ele) => (
    <Text key={ele.date}>
      {`${ele.date}: ${ele.event}`}
    </Text>
  ));
}

export default function Homepage() {
  const [announcements, setAnnouncements] = useState("Loading");
  useEffect(() => {
    API.get("/announcements")
      .then((res) => {
        setAnnouncements(res.data);
      })
      .catch((err) => {
        console.log(err);
        setAnnouncements("Could not retrieve announcements");
      });
  }, []);

  const announcementsList = createAnnouncementsList(announcements);

  return (
    <Container>
      <Section label="Announcements" color='green'>
        {announcementsList}
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

const Text = styled.div`

`;
