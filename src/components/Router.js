import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom"
import Auth from "routes/Auth";
import Home from "routes/Home";

export const AppRouter = ({ isLoggedIn }) => {
  return (
    <Router>
      <Switch>
        <Route>
          {isLoggedIn ? <Home /> : <Auth />}
        </Route>
      </Switch>
    </Router>
  )
}