import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, Switch, BrowserRouter} from 'react-router-dom'
import Homepage from './components/Homepage'
import People from './components/People'
import Wiki from './components/Wiki'
import Navbar from './components/Navbar'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/wiki" component={Wiki} />
        <Route path="/people" component={People} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
