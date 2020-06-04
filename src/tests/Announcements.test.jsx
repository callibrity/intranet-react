// users.test.js
import React from "react";
import API from "../globals/api";
import News from "../Components/home/News";
import { mockNewsResponse, apiInitialMessage, apiErrorMessage } from "../globals/constants";
import { render, wait } from "@testing-library/react";

jest.mock("../globals/api");

test("rejected news call", async () => {
  API.get.mockRejectedValue();
  const {queryByText} = render(<News />);

  expect(queryByText(apiInitialMessage)).toBeInTheDocument();

  await wait(() => expect(queryByText(apiErrorMessage)).toBeInTheDocument());

  expect(API.get.mock.calls.length).toEqual(1);
});

test("successful news call", async () => {
  API.get.mockResolvedValue(mockNewsResponse);
  const {getByText} = render(<News />);
  const {date, event} = mockNewsResponse.data[1];

  await wait(() => expect(getByText(`${date}: ${event}`)).toBeInTheDocument());

  expect(API.get.mock.calls.length).toEqual(2);
});