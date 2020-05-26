import React from "react";

const calendarString = "https://calendar.google.com/calendar/b/2/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=America%2FNew_York&amp;showTitle=0&amp;showPrint=0&amp;src=Y2FsbGlicml0eS5jb21fcHE1dDVlYWNyczVoN29haHNhOWk3bTJtNm9AZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;src=Y2FsbGlicml0eS5jb21fMGY5aXJjMDFrOGowZ3A5ZG9xbTRvZGpvcm9AZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;src=Y2FsbGlicml0eS5jb21fYnM0b3U4NDB0dnVva2w2N2JhMG50MjZycGtAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%23F6BF26&amp;color=%23009688&amp;color=%23F6BF26";

export default function Calendar() {
  return (
    <>
      <iframe src="https://calendar.google.com/calendar/b/2/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=America%2FNew_York&amp;showTitle=0&amp;showPrint=0&amp;src=Y2FsbGlicml0eS5jb21fcHE1dDVlYWNyczVoN29haHNhOWk3bTJtNm9AZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;src=Y2FsbGlicml0eS5jb21fMGY5aXJjMDFrOGowZ3A5ZG9xbTRvZGpvcm9AZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;src=Y2FsbGlicml0eS5jb21fYnM0b3U4NDB0dnVva2w2N2JhMG50MjZycGtAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%23F6BF26&amp;color=%23009688&amp;color=%23F6BF26" width="800" height="600" frameBorder="0" scrolling="no"></iframe>
    </>
  );
}
