//React Imports
import React from "react";

//Material UI Imports
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const Theme: React.FC = ({ children }) => {
  const theme = createMuiTheme({
    palette: {},
  });

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
