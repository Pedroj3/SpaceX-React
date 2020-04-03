import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import  AppContext from "./State";
import Main from './Pages/Main';
import MissionDetails from './Pages/MissionDetails'

function App() {
  return (
    <AppContext>
      <BrowserRouter>
        <Switch>
          <Route path="/dashboard" exact>
            <Main />
          </Route>
          <Route path="/dashboard/:id">
            <MissionDetails />
          </Route>
        </Switch>
      </BrowserRouter>
    </AppContext>
  );
}

export default App;
