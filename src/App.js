//React Imports
import React from "react";
import { hot } from "react-hot-loader";

const App = () => {
  return <div>Hello World</div>;
};

//Hot Loader reloads the app when you save changes
export default hot(module)(App);
