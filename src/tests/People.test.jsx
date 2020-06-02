// users.test.js
import React from "react";
import API from "../api";
import People, {initialMessage, errorMessage} from "../Components/people/People";
import { mockEmployeeResponse } from "../constants";
import { render, wait, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

jest.mock("../api");

test("rejected announcements call", async () => {
  API.get.mockRejectedValue();
  const {getByText} = render(<Router><People /></Router>);

  expect(getByText(initialMessage)).toBeInTheDocument();

  await wait(() => expect(getByText(errorMessage)).toBeInTheDocument());

  expect(API.get.mock.calls.length).toEqual(1);
});

test("search navigation", async () => {
  API.get.mockResolvedValue(mockEmployeeResponse);
  const {getByText, getByRole, queryByText} = render(<Router><People /></Router>);

  await wait(() => expect(getByText("Alec")).toBeInTheDocument());
  expect(API.get.mock.calls.length).toEqual(2);

  fireEvent.change(getByRole("searchbox"), { target: { value: "and" }});

  expect(queryByText("Alec")).not.toBeInTheDocument();
  expect(getByText("Andy")).toBeInTheDocument();
  expect(getByText("Andrew")).toBeInTheDocument();

});