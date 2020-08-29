//React Imports
import React from "react";
import { hot } from "react-hot-loader";
import Home from "./Pages/Home";

//Material UI Imports
import Theme from "./Theme";
import CssBaseline from "@material-ui/core/CssBaseline";

//Router Imports
import { HashRouter as Router, Switch, Route } from "react-router-dom";

const App: React.FC = (props) => {
  return (
    <Theme>
      <CssBaseline />
      <Routes />
    </Theme>
  );
};

const Routes: React.FC = (props) => {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};

//Hot Loader reloads the app when you save changes
export default hot(module)(App);
