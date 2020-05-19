import React from "react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { render, fireEvent } from "@testing-library/react";
import Navbar from "../Components/Navbar";

test("navbar rendering and search bar", () => {
  const history = createMemoryHistory();
  const { queryByAltText, queryByText } = render(<Router history={history}><Navbar /></Router>);
  const logo = queryByAltText(/Callibrity Logo/i);
  const wikiLink = queryByText(/wiki/i);

  expect(logo).toBeInTheDocument();
  expect(wikiLink).toBeInTheDocument();

  const input = queryByAltText(/search bar/i);
  fireEvent.change(input, { target: { value: "test input" } });
  expect(queryByAltText(/search bar/i).value).toBe("test input");
});
