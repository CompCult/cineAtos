import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import Fab from '@material-ui/core/Fab'
import Icon from '@material-ui/core/Icon'
import '../../App.css'

const useStyles = makeStyles(theme => ({
  fab: {
    margin: theme.spacing(1),
  }
}));

function CreateEvents() {
  const classes = useStyles();

  return (
      <Fab color="secondary" aria-label="Edit" className={classes.fab}>
        <Icon>edit_icon</Icon>
        Events
      </Fab>
  );
}

export default CreateEvents;
