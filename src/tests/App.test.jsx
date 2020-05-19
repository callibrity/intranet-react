import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "../App";

function renderApp() {
  const app = render(<App />);

  return {
    app,
    logo: app.getByAltText(/callibrity logo/i),
    wikiNav: app.getByText(/wiki/i),
    peopleNav: app.getByText(/people/i),
  };
}

function queryForPages(app) {
  return {
    homePage: app.queryByText(/announcements/i),
    wikiPage: app.queryByText(/wiki check/i),
    peoplePage: app.queryByText(/financial analyst/i)
  };
}

test("full app rendering/navigating", () => {
  const {app, logo, wikiNav, peopleNav} = renderApp();

  let {homePage, wikiPage, peoplePage} = queryForPages(app);

  expect(homePage).toBeInTheDocument();
  expect(wikiPage).not.toBeInTheDocument();
  expect(peoplePage).not.toBeInTheDocument();

  fireEvent.click(wikiNav);
  ({homePage, wikiPage, peoplePage} = queryForPages(app));

  expect(homePage).not.toBeInTheDocument();
  expect(wikiPage).toBeInTheDocument();
  expect(peoplePage).not.toBeInTheDocument();

  fireEvent.click(peopleNav);
  ({homePage, wikiPage, peoplePage} = queryForPages(app));

  expect(homePage).not.toBeInTheDocument();
  expect(wikiPage).not.toBeInTheDocument();
  expect(peoplePage).toBeInTheDocument();

  fireEvent.click(logo);
  ({homePage, wikiPage, peoplePage} = queryForPages(app));
  
  expect(homePage).toBeInTheDocument();
  expect(wikiPage).not.toBeInTheDocument();
  expect(peoplePage).not.toBeInTheDocument();
});
