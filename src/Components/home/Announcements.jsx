import React, { useState, useEffect } from "react";
import API from "../../api";
import styled from "styled-components";

export const announcementsRejection = "Could not retrieve announcements";
export const initialAnnouncement = "Loading";

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

export default function Announcements() {
  const [announcements, setAnnouncements] = useState(initialAnnouncement);
  useEffect(() => {
    API.get("/announcements")
      .then((res) => {
        setAnnouncements(res.data);
      })
      .catch((err) => {
        setAnnouncements(announcementsRejection);
      });
  }, []);

  const announcementsList = createAnnouncementsList(announcements);

  return (
    <>
      {announcementsList}
    </>
  );
}

const Text = styled.div`

`;
