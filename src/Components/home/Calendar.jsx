import React from "react";
import styled from "styled-components";

export default function Calendar() {
  const baseStr = "https://calendar.google.com/calendar/b/2/embed?showTz=0&showCalendars=1&showPrint=0&showTitle=0";
  const companyHolidays = "Y2FsbGlicml0eS5jb21fMGY5aXJjMDFrOGowZ3A5ZG9xbTRvZGpvcm9AZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ";
  const lunchAndLearn = "Y2FsbGlicml0eS5jb21fYnM0b3U4NDB0dnVva2w2N2JhMG50MjZycGtAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ";
  const arr = [companyHolidays, lunchAndLearn];
  const str = arr.reduce((acc, value) => `${acc}&src=${value}`, baseStr);

  return (
    <Container>
      <iframe 
        title="calendar" 
        src={str}
        width="100%" 
        height="100%" 
        frameBorder="0" 
        scrolling="no" 
      />
    </Container>
  );
}

const Container = styled.div`
  height: 600px;
`;
