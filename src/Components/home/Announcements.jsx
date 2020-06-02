import React from "react";
import styled from "styled-components";
import useAPI from "../../hooks/useAPI";

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
  const announcements = useAPI("/announcements");

  const announcementsList = createAnnouncementsList(announcements);

  return (
    <>
      {announcementsList}
    </>
  );
}

const Text = styled.div`

`;
