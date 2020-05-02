import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { ButtomAdd } from "./buttom/Buttom";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles(theme => ({
  title: {
    textAlign: "center",
    marginBottom: "1%"
  },
  margin: {
    marginLeft: '5%',
  },
  link: {
    textDecoration: 'none'
  }
}));
export const TitleTableAdd = ({ to, title, titleTable }) => {
  const classes = useStyles();
  return (
    <Grid container direction="row" justify="flex-start" alignItems="center">
      <Link to={to} className={classes.link}>
        <ButtomAdd title={title} />
      </Link>
      {titleTable && <div className={classes.margin} >Lista de {titleTable}</div>}
    </Grid>
  );
};

export const TitleTable = ({ titleTable }) => {
  return <div>Lista de {titleTable}</div>;
};

export const Title = ({ title, fontSize }) => {
  const classes = useStyles();
  return (
    <div className={classes.title}>
      <Box fontSize={fontSize} fontWeight="fontWeightBold">
        {title}
      </Box>
    </div>
  );
};