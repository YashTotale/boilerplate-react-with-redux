//React Imports
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// Redux Imports
import { Provider } from "react-redux";
import { configureStore } from "./store";

//Redux Persist Imports
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/lib/integration/react";

//Material UI Imports
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme";
import CssBaseline from "@material-ui/core/CssBaseline";

const store = configureStore();
const persistor = persistStore(store);

ReactDOM.render(
  <Provider store={store}>
    {/* Persists the store */}
    <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <App />
      </ThemeProvider>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
