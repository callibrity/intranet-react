import React from "react";
import useAPI from "../../hooks/useAPI";

export function createAnnouncementsList(text) {
  const typeCheck = typeof text === "string";
  if (typeCheck) {
    return text;
  }

  return text.map((ele) => (
    <div key={ele.date}>
      {`${ele.date}: ${ele.event}`}
    </div>
  ));
}

export default function Announcements() {
  const announcements = useAPI("/announcements");
  const announcementsList = createAnnouncementsList(announcements);
  return (
    <>
      {announcementsList}
    </>
  );
}
