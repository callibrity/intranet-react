import React from 'react';
import styled from 'styled-components';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';

import "@fullcalendar/core/main.css";
import "@fullcalendar/daygrid/main.css";
import "@fullcalendar/timegrid/main.css";


export default function Calendar() {
  return (
    <Container>
      <FullCalendar
        defaultView="dayGridMonth"
        plugins={[dayGridPlugin, timeGridPlugin]}
        events={[
          { title: 'event 1', start: '2020-05-01', end: '2020-05-04' },
          { title: 'event 2', start: '2020-05-03', end: '2020-05-06' },
          { title: 'event 3', start: '2020-05-03', end: '2020-05-06' },
          { title: 'event 4', start: '2020-05-03', end: '2020-05-06' },
        ]}
        header={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek"
        }}
      />
    </Container>
  );
}

const Container = styled.div`

`;
