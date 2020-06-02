// testing change
import React, { useState } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { normalize } from "styled-normalize";
import "typeface-roboto";
import Navbar from "./Components/navbar/Navbar";
import Homepage from "./Components/home/Homepage";
import People from "./Components/people/People";
import Wiki from "./Components/wiki/Wiki";
import Login from "./Components/login/Login";
import PersonalPage from "./Components/personal/PersonalPage";
import theme from "./globals/theme";
import {UserContext} from "./globals/UserContext";

const GlobalStyle = createGlobalStyle`
 ${normalize}

 html {
  background-color: #EEECEF;
 }

 body {
  margin: 0;
  font-family: 'Roboto', sans-serif;
  min-height: 100vh;
  position: relative;
  font-size: 20px;
  background-color: #EEECEF;
 }

 a {
   border-radius: 5px;
   color: inherit;
   text-decoration: none;
   padding: 5px;
   cursor: pointer;
 }

 h1 {
   font-size: inherit;
   margin: 0;
   font-weight: inherit;
 }

 h2 {
   font-size: inherit;
   font-weight: inherit;
   margin: 0;
 }

 p {
   margin: 0;
 }

 svg {
  margin: 0 3px;
 }

 ul {
   list-style-type: none;
   padding: 0;
   margin: 0;
 }
`;


function App() {
  const [username, setUsername] = useState(null);
  const [userEmail, setUserEmail] = useState(null);
  const userInfo = { username, setUsername, userEmail, setUserEmail };

  const ifUserSignedIn =(Component) => {
    return (username ?
      <Component/> :
      <Login/>
    );
  };

  return (
    <UserContext.Provider value={userInfo}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <GlobalStyle />
          <Navbar />
          <Switch>
            <Route exact path="/" component={() => ifUserSignedIn(Homepage)} />
            <Route path="/wiki" component={() => ifUserSignedIn(Wiki)} />
            <Route path="/people" component={() => ifUserSignedIn(People)} />
            <Route path="/personal" component={() => ifUserSignedIn(PersonalPage)} />
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </UserContext.Provider>
  );
}

export default App;
