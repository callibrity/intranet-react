import React from "react";
import API from "../../api";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import googleCalendarPlugin from "@fullcalendar/google-calendar";
import interactionPlugin from "@fullcalendar/interaction";

import "@fullcalendar/core/main.css";
import "@fullcalendar/daygrid/main.css";
import "@fullcalendar/timegrid/main.css";
import "./calendar.css";

const testEvents = [
  { title: "url test", start: "2020-05-10", end: "2020-05-17", url: "https://www.callibrity.com/" },
  { title: "background color test", start: "2020-05-10", end: "2020-05-17", backgroundColor: "red" },
  { title: "border color test", start: "2020-05-10", end: "2020-05-17", borderColor: "red" },
  { title: "text color test", start: "2020-05-10", end: "2020-05-17", textColor: "red" }
];

const calendarHeader = {
  left: "prev,next today",
  center: "title",
  right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek"
};

export function calendarCall(info, successCallback) {
  API.get(`/calendar?start=${info.start}&end=${info.end}`)
    .then((res) => successCallback(res.data))
    .catch((err) => console.log(err));
}

export default function Calendar() {
  return (
    <div onClick={(e) => e.preventDefault()}>
      <FullCalendar
        defaultView="dayGridMonth"
        plugins={[dayGridPlugin, timeGridPlugin, googleCalendarPlugin, interactionPlugin]}
        googleCalendarApiKey='AIzaSyBREtcqxmgY2SbJB5ddscMlKpWrHM0R1JM'
        events={{googleCalendarId: "q2o6gp4ogd31rls2q7sqvl5nps@group.calendar.google.com"}}
        header={calendarHeader}
        eventRender={(info) => {
          var node = document.createElement("LI");
          var textnode = document.createTextNode("Water");
          node.appendChild(textnode);
          info.el.appendChild(node);
          info.el.appendChild(<div>Hello</div>);
        }}
      />
    </div>
  );
}
