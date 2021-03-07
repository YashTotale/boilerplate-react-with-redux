//React Imports
import React, { FC } from "react";
import Navbar from "../Components/Navbar";

//Material UI Imports
import { makeStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => ({
  home: {},
}));

const Home: FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.home}>
      <Navbar />
    </div>
  );
};

export default Home;
