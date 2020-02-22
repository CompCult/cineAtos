import React from "react";
import { Link } from "react-router-dom";
import ListItem from "@material-ui/core/ListItem";
import { makeStyles } from "@material-ui/core/styles";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from '@material-ui/core/ListItemIcon';

const useStyles = makeStyles(theme => ({
  linkBreadcromb: {
    textDecoration: "none",
    color: "#999999"
  }
}));

export const ListItemLink = ({ to, primary, className }) => {
  const classes = useStyles();

  return (
    <Link to={to} className={classes.linkBreadcromb}>
      <ListItem button>
        <ListItemText className={className} primary={primary} />
      </ListItem>
    </Link>
  );
}

export const ListItemComponent = ({ valor, onClick, icon, title }) => {
  return (
    <ListItem button key={valor} onClick={onClick}>
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText primary={title} />
    </ListItem>
  );
}



