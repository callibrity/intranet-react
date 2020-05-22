import React from "react";
import API from "../../api";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import googleCalendarPlugin from "@fullcalendar/google-calendar";
import interactionPlugin from "@fullcalendar/interaction";
import tippy from "tippy.js";
import "tippy.js/dist/tippy.css";
import {darkOrange, darkBlue, darkGreen } from "../../theme";


import "@fullcalendar/core/main.css";
import "@fullcalendar/daygrid/main.css";
import "@fullcalendar/timegrid/main.css";
import "./calendar.css";

const colors = [darkOrange, darkBlue, darkGreen];

const calendarHeader = {
  left: "prev,next today",
  center: "title",
  right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek"
};

export function calendarCall(info, successCallback) {
  API.get(`/calendar?start=${info.start}&end=${info.end}`)
    .then((res) => successCallback(res.data))
    .catch((err) => console.error(err));
}

export default function Calendar() {

  return (
    <FullCalendar
      defaultView="dayGridMonth"
      eventTextColor="white"
      eventBorderColor="rgba(0, 0, 0, 0)"
      plugins={[dayGridPlugin, timeGridPlugin, googleCalendarPlugin, interactionPlugin]}
      googleCalendarApiKey='AIzaSyBREtcqxmgY2SbJB5ddscMlKpWrHM0R1JM'
      events={{googleCalendarId: "q2o6gp4ogd31rls2q7sqvl5nps@group.calendar.google.com"}}
      header={calendarHeader}
      eventDataTransform={(info) => {
        info.url = undefined;
      }}
      eventRender={(info) => {
        const {location, description} = info.event.extendedProps;
        info.el.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        info.el.setAttribute("data-tippy-content", `<strong>Location</strong>: ${location} <strong>Description</strong>: ${description}`); 
        tippy(info.el, {
          allowHTML: true,
          trigger: "click",
          arrow: true,
          duration: 500,
          interactive: true,
          interactiveBorder: 30,
          maxWidth: 500,
          placement: "bottom",
          appendTo: document.body
        });
      }}
    />
  );
}
