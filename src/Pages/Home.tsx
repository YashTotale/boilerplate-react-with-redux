//React Imports
import React from "react";

//Material UI Imports
import { makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
  home: {},
}));

const HomePage: React.FC = () => {
  const classes = useStyles();

  return <div className={classes.home}>Home</div>;
};

export default HomePage;
