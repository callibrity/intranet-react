// users.test.js
import React from "react";
import API from "../globals/api";
import People from "../Components/people/People";
import { mockEmployeeResponse, apiInitialMessage, apiErrorMessage } from "../globals/constants";
import { render, wait, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

jest.mock("../globals/api");

test("rejected news call", async () => {
  API.get.mockRejectedValue();
  const {getByText} = render(<Router><People /></Router>);

  expect(getByText(apiInitialMessage)).toBeInTheDocument();

  await wait(() => expect(getByText(apiErrorMessage)).toBeInTheDocument());

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