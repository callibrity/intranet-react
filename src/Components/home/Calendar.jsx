import React from "react";
import styled from "styled-components";

export default function Calendar() {
  return (
    <Container>
      <iframe 
        title="calendar" 
        src="https://calendar.google.com/calendar/b/2/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=America%2FNew_York&amp;showTitle=0&amp;showPrint=0&amp;src=Y2FsbGlicml0eS5jb21fcHE1dDVlYWNyczVoN29haHNhOWk3bTJtNm9AZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;src=Y2FsbGlicml0eS5jb21fMGY5aXJjMDFrOGowZ3A5ZG9xbTRvZGpvcm9AZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;src=Y2FsbGlicml0eS5jb21fYnM0b3U4NDB0dnVva2w2N2JhMG50MjZycGtAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%23F6BF26&amp;color=%23009688&amp;color=%23F6BF26" 
        width="100%" 
        height="100%" 
        frameBorder="0" 
        scrolling="no" />
    </Container>
  );
}

const Container = styled.div`
  height: 600px;
`;
