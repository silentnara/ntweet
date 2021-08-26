import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Auth from "routes/Auth";
import Home from "routes/Home";
import Profile from "routes/Profile";
import Navigation from "./Navigation";

export const AppRouter = ({ isLoggedIn }) => {
  return (
    <Router>
      {isLoggedIn && <Navigation />}
      <Switch>
        <Route>
          {isLoggedIn ? (
            <>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/profile">
                <Profile />
              </Route>
            </>
          ) : (
            <>
              <Route exact path="/">
                <Auth />
              </Route>
            </>
          )}
        </Route>
      </Switch>
    </Router>
  );
};
