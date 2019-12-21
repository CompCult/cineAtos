import React, { useState, Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import MenuIcon from '@material-ui/icons/Menu'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import IconButton from '@material-ui/core/IconButton'
import Breadcrumb from './Breadcrumb.js'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(theme => ({
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 8px',
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
    backgroundColor: '#212121',
    color: 'white'
  },
  namelogo: {
    fontSize: 20,
    marginTop: theme.spacing(-1),
  },
}));

export default function SwipeableTemporaryDrawer() {
  const classes = useStyles();
  const [open, setOpen] = useState(false)

  function handleDrawer() {
    setOpen(!open)
  }

  return (
    <Fragment>
      <IconButton color="secondary" onClick={handleDrawer}>
        <MenuIcon />
      </IconButton>
      <SwipeableDrawer open={open} onClose={handleDrawer} onOpen={handleDrawer} >
        <div className={classes.drawerHeader}>
          <div className={classes.namelogo} >
            <Box fontStyle="normal" m={2}>
              <Typography variant="h5" noWrap>
                <b>LerAtos</b>
              </Typography>
            </Box>
          </div>
          <IconButton color="secondary" onClick={handleDrawer}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Breadcrumb />
      </SwipeableDrawer>
    </Fragment>
  );
}