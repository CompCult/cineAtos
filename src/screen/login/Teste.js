import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
}));

function Teste() {
  const classes = useStyles();

  return (
    <div>

      <Button variant="contained" color="primary" className={classes.button}>
        Entrar
      </Button>
     
     
    
    </div>
  );
}

export default Teste;