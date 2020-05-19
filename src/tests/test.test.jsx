// users.test.js
import React from "react";
import API from "../api";
import Homepage, {announcementsRejection, initialAnnouncement} from "../Components/Homepage";
import { render, fireEvent, cleanup, wait } from "@testing-library/react";

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
  const {queryByText} = render(<Homepage />);

  expect(queryByText(initialAnnouncement)).toBeInTheDocument();

  await wait(() => expect(queryByText(announcementsRejection)).toBeInTheDocument());

  expect(API.get.mock.calls.length).toEqual(2);
});

test("successful announcements call", async () => {
  API.get.mockResolvedValue(mockAnnouncementsResponse);
  const {getByText} = render(<Homepage />);

  await wait(() => expect(getByText(/Alex, Alex, and Alec confused everyone with their names/i)).toBeInTheDocument());

  expect(API.get.mock.calls.length).toEqual(4);
});