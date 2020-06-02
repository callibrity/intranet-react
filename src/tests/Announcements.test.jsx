// users.test.js
import React from "react";
import API from "../globals/api";
import Announcements from "../Components/home/Announcements";
import { mockAnnouncementsResponse, apiInitialMessage, apiErrorMessage } from "../globals/constants";
import { render, wait } from "@testing-library/react";

jest.mock("../api");

test("rejected announcements call", async () => {
  API.get.mockRejectedValue();
  const {queryByText} = render(<Announcements />);

  expect(queryByText(apiInitialMessage)).toBeInTheDocument();

  await wait(() => expect(queryByText(apiErrorMessage)).toBeInTheDocument());

  expect(API.get.mock.calls.length).toEqual(1);
});

test("successful announcements call", async () => {
  API.get.mockResolvedValue(mockAnnouncementsResponse);
  const {getByText} = render(<Announcements />);
  const {date, event} = mockAnnouncementsResponse.data[1];

  await wait(() => expect(getByText(`${date}: ${event}`)).toBeInTheDocument());

  expect(API.get.mock.calls.length).toEqual(2);
});