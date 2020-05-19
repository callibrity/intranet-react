// users.test.js
import React from "react";
import API from "../api";
import Announcements, {announcementsRejection, initialAnnouncement} from "../Components/home/Announcements";
import { render, wait } from "@testing-library/react";

jest.mock("../api");

const mockAnnouncementsResponse = {data: [
  {
    date: "May 3",
    event: "Alex, Alex, and Alec became acquainted"
  },
  {
    date: "May 4",
    event: "Alex, Alex, and Alec confused everyone with their names"
  },
  {
    date: "May 5",
    event: "Alex, Alex, and Alec thought everyone should change their names to Ale*"
  }
]};

test("rejected announcements call", async () => {
  API.get.mockRejectedValue();
  const {queryByText} = render(<Announcements />);

  expect(queryByText(initialAnnouncement)).toBeInTheDocument();

  await wait(() => expect(queryByText(announcementsRejection)).toBeInTheDocument());

  expect(API.get.mock.calls.length).toEqual(1);
});

test("successful announcements call", async () => {
  API.get.mockResolvedValue(mockAnnouncementsResponse);
  const {getByText} = render(<Announcements />);
  const {date, event} = mockAnnouncementsResponse.data[1];

  await wait(() => expect(getByText(`${date}: ${event}`)).toBeInTheDocument());

  expect(API.get.mock.calls.length).toEqual(2);
});