import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { ButtomAdd } from "./buttom/Buttom";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles(theme => ({
  title: {
    textAlign: "center",
    marginBottom: "1%",
    color: 'white'
  },
  margin: {
    marginLeft: '5%',
  },
  link: {
    textDecoration: 'none',
    marginLeft: -22
  },
  titlePage: {
    color: '#fff',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 900,
    fontSize: 36,
    textTransform: 'uppercase'
  },
  titleSubPage: {
    color: '#fff',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 900,
    fontSize: 24,
    borderLeft: '1px solid #0060B8',
    marginLeft: 20
  },
  marginTitleSubPage: {
    marginLeft: 20
  },
  marginTitlePage: {
    marginLeft: '7%',
  }
}));

export const TitleTableAdd = ({ to, title }) => {
  const classes = useStyles();
  return (
    <Link to={to} className={classes.link}>
      <ButtomAdd title={title} />
    </Link>
  );
};

export const Title = ({ title, fontSize }) => {
  const classes = useStyles();
  return (
    <div className={classes.title}>
      <Box fontSize={fontSize || 32} fontWeight="fontWeightBold">
        {title}
      </Box>
    </div>
  );
};


export const TitlePage = ({ title, subTitle }) => {
  const classes = useStyles();
  return (
    <div className={classes.marginTitlePage}>
      <span className={classes.titlePage}>
        {title}
      </span>
      {subTitle && (
        <span className={classes.titleSubPage}>
          <span className={classes.marginTitleSubPage}>
            {subTitle}
          </span>
        </span>
      )}
    </div>
  );
};