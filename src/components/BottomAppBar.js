import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: 'secondary',
    top: 'auto',
    buttom: 0,
  },
}));

function BottomAppBar() {
  const classes = useStyles();

  return (
     <Grid item xs={12} className={classes.root}>
       <ButtonGroup
              fullWidth 
              variant="contained"
              color="secondary"
              size="large"
              aria-label="Large contained secondary button group">

          <Button href='/pessoas'>
            Feed 
          </Button>
          <Button href='/pessoas2'>
            Missões 
          </Button>
          <Button href='/pessoas3'>
            Escolhas 
          </Button>

        </ButtonGroup>
      </Grid>
  )
}

export default BottomAppBar;
