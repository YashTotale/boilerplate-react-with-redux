//React Imports
import React, { FC } from "react";
import Navbar from "../Components/Navbar";

//Material UI Imports
import { makeStyles, Theme, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => ({
  home: {},
}));

const Home: FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.home}>
      <Navbar />
      <Typography variant="h1" align="center">
        Boilerplate React with Redux
      </Typography>
      <Typography variant="h6" align="center">
        Edit <code>src/Pages/Home.tsx</code> to view live changes!
      </Typography>
    </div>
  );
};

export default Home;
