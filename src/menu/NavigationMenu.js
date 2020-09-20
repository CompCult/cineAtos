import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Routes from "./Routes.js";
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import UserMenu from './UserMenu.js';
import Fab from '@material-ui/core/Fab';
import MenuIcon from '@material-ui/icons/Menu';

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

const useStyles = makeStyles(theme => ({
  root: {
    background: '#0060B8'
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none"
    },
    marginLeft: theme.spacing(-2)
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex"
    },
    marginLeft: theme.spacing(-3)
  },
  namelogo: {
    fontSize: 18,
    color: "#ffffff",
    marginLeft: theme.spacing(3)
  },
  text: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 18,
    marginLeft: 335
  },
  fab: {
    position: 'fixed',
    bottom: theme.spacing(5),
    right: theme.spacing(5),
    zIndex: 1
  }
}));

function NavigationMenu(props) {
  const classes = useStyles();

  const renderDesktopMenu = (
    <Grid container direction="row" justify="space-between" alignItems="flex-start"  >
      <Typography className={classes.namelogo} >LerAtos</Typography>
      <Typography className={classes.text} >Estúdio de Criação LerAtos</Typography>
      <UserMenu />
    </Grid>
  );

  const renderMobileMenu = (
    <Grid container direction="row" justify="space-between" alignItems="baseline"  >
      <Typography className={classes.namelogo} >LerAtos</Typography>
      <UserMenu />
    </Grid>
  );

  return (
    <>
      <HideOnScroll {...props}>
        <AppBar className={classes.root}>
          <Toolbar>
            <div className={classes.sectionDesktop}>
              {renderDesktopMenu}
            </div>
            <div className={classes.sectionMobile}>
              {renderMobileMenu}
            </div>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <div className={classes.fab}>
        <Fab color="secondary" aria-label="add" className={classes.fab} href="/">
          <MenuIcon />
        </Fab>
      </div>
      <Routes />
    </>
  );
}

export default NavigationMenu;