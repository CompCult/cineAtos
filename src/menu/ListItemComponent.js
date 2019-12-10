import React from "react";
import { Link } from "react-router-dom";
import ListItem from "@material-ui/core/ListItem";
import { makeStyles } from "@material-ui/core/styles";
import ListItemText from "@material-ui/core/ListItemText";

const useStyles = makeStyles(theme => ({
  linkBreadcromb: {
    textDecoration: "none",
    color: "#999999"
  }
}));

function ListItemComponent({ to, primary, className }) {
  const classes = useStyles();

  return (
    <Link to={to} className={classes.linkBreadcromb}>
      <ListItem button>
        <ListItemText className={className} primary={primary} />
      </ListItem>
    </Link>
  );
}

export default ListItemComponent;
