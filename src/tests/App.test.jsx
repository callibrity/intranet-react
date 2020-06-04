import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import App from "../App";

jest.mock("react-google-login", () => {
  return {
    useGoogleLogin: ({onSuccess}) => {
      return {signIn: () => onSuccess({profileObj: {name: "testName", email: "test"}})};
    },
    useGoogleLogout: ({onLogoutSuccess}) => {
      return {signOut: () => onLogoutSuccess()};
    },
  };
});

function renderApp() {
  const app = render(<App />);

  return {
    app,
    login: app.getByText(/sign in/i),
    logo: app.getByAltText(/callibrity logo/i),
    search: app.getByAltText(/search bar/i),
    wikiNav: app.getByText(/wiki/i),
    peopleNav: app.getByText(/people/i),
  };
}

function queryForPages(app) {
  return {
    loginPage: app.queryByText(/welcome/i),
    homePage: app.queryByText(/news/i),
    wikiPage: app.queryByText(/wiki check/i),
    peoplePage: app.queryByText(/cincinnati/i)
  };
}

function queryForSearchBar(app) {
  return {
    searchBar: app.getByAltText(/search bar/i),
  };
}

afterEach(cleanup);

test("full app rendering/navigating", () => {
  const {login, app, logo, wikiNav, peopleNav} = renderApp();

  let {loginPage, homePage, wikiPage, peoplePage} = queryForPages(app);

  expect(loginPage).toBeInTheDocument();

  fireEvent.click(login);
  ({loginPage, homePage} = queryForPages(app));
  expect(loginPage).not.toBeInTheDocument();
  expect(homePage).toBeInTheDocument();

  fireEvent.click(wikiNav);
  ({homePage, wikiPage} = queryForPages(app));
  expect(homePage).not.toBeInTheDocument();
  expect(wikiPage).toBeInTheDocument();

  fireEvent.click(peopleNav);
  ({wikiPage, peoplePage} = queryForPages(app));
  expect(wikiPage).not.toBeInTheDocument();
  expect(peoplePage).toBeInTheDocument();

  fireEvent.click(logo);
  ({homePage, wikiPage} = queryForPages(app));
  expect(homePage).toBeInTheDocument();
  expect(wikiPage).not.toBeInTheDocument();

  fireEvent.click(app.getByText(/testName/i));
  const logout = app.queryByText(/sign out/i);
  fireEvent.click(logout);
  ({loginPage, homePage} = queryForPages(app));
  expect(loginPage).toBeInTheDocument();
  expect(homePage).not.toBeInTheDocument();
});

test("search bar input", () => {
  const {app} = renderApp();

  let {searchBar} = queryForSearchBar(app);
  expect(searchBar.value).toBe("");

  fireEvent.change(searchBar, { target: { value: "test input" } });

  ({searchBar} = queryForSearchBar(app));

  expect(searchBar.value).toBe("test input");
});
