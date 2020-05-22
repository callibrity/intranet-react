import React from "react";
import API from "../../api";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import googleCalendarPlugin from "@fullcalendar/google-calendar";
import interactionPlugin from "@fullcalendar/interaction";
import {darkOrange, darkBlue, darkGreen } from "../../theme";


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

const colors = [darkOrange, darkBlue, darkGreen];

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
    <FullCalendar
      defaultView="dayGridMonth"
      eventTextColor="white"
      eventBorderColor="rgba(0, 0, 0, 0)"
      plugins={[dayGridPlugin, timeGridPlugin, googleCalendarPlugin, interactionPlugin]}
      googleCalendarApiKey='AIzaSyBREtcqxmgY2SbJB5ddscMlKpWrHM0R1JM'
      events={{googleCalendarId: "q2o6gp4ogd31rls2q7sqvl5nps@group.calendar.google.com"}}
      header={calendarHeader}
      eventDataTransform={(info) => {
        console.log(info);
        info.url = undefined;
      }}
      eventRender={(info) => {
        const {location, description} = info.event.extendedProps;
        info.el.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        let node;
        let textnode;
        if(location){
          node = document.createElement("div");
          textnode = document.createTextNode(`Location: ${location}`);
          node.appendChild(textnode);
          info.el.appendChild(node);
        }
        if(description){
          if(description[0] === "<"){
            info.el.insertAdjacentHTML("beforeend", `Link: ${description}`);
          } else{
            node = document.createElement("div");
            textnode = document.createTextNode(`Description: ${description}`);
            node.appendChild(textnode);
            info.el.appendChild(node);
          }
        }
      }}
    />
  );
}
