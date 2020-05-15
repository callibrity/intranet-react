import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';

import "@fullcalendar/core/main.css";
import "@fullcalendar/daygrid/main.css";
import "@fullcalendar/timegrid/main.css";
import './calendar.css';

const testEvents = [
  { title: 'url test', start: '2020-05-10', end: '2020-05-17', url: 'https://www.callibrity.com/' },
  { title: 'background color test', start: '2020-05-10', end: '2020-05-17', backgroundColor: 'red' },
  { title: 'border color test', start: '2020-05-10', end: '2020-05-17', borderColor: 'red' },
  { title: 'text color test', start: '2020-05-10', end: '2020-05-17', textColor: 'red' }
];


export default function Calendar() {
  return (
    <FullCalendar
      defaultView="dayGridMonth"
      plugins={[dayGridPlugin, timeGridPlugin]}
      eventSources={[`${process.env.REACT_APP_API_URL}/calendar`, testEvents]}
      header={{
        left: "prev,next today",
        center: "title",
        right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek"
      }}
    />
  );
}

/*
[
        { title: 'event 1', start: '2020-05-01', end: '2020-05-04' },
        { title: 'event 2', start: '2020-05-03', end: '2020-05-06' },
        { title: 'event 3', start: '2020-05-03', end: '2020-05-06' },
        { title: 'event 4', start: '2020-05-03', end: '2020-05-06' },
      ]
      */
