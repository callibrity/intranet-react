import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import App from "../App";

function renderApp() {
  const app = render(<App />);

  return {
    app,
    logo: app.getByAltText(/callibrity logo/i),
    search: app.getByAltText(/search bar/i),
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

function queryForSearchBar(app) {
  return {
    searchBar: app.getByAltText(/search bar/i),
  };
}

afterEach(cleanup);

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

test("search bar input", () => {
  const {app} = renderApp();

  let {searchBar} = queryForSearchBar(app);
  expect(searchBar.value).toBe("");

  fireEvent.change(searchBar, { target: { value: "test input" } });

  ({searchBar} = queryForSearchBar(app));

  expect(searchBar.value).toBe("test input");
});
