import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Link } from "react-router-dom";
import Routes from "./Routes.js";
import { logout, getIsGestor, getUser, getImage } from "../services/Auth";
import Drawer from "./Drawer.js";
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import { deepOrange } from '@material-ui/core/colors';
import Chip from '@material-ui/core/Chip';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';

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
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
    marginRight: theme.spacing(1)
  },
  small: {
    width: 40,
    height: 40,
    marginRight: theme.spacing(1)
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none"
    },
    marginLeft: theme.spacing(-2)
  },
  namelogo: {
    fontSize: 18,
    color: "#ffffff",
  },
  link: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    marginLeft: 50,
    textDecoration: "none",
    color: "white",
    fontSize: 12
  },
  linkMobile: {
    textAlign: 'right',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    textDecoration: "none",
    color: "white",
    fontSize: 12
  },
  text: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 18,
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex"
    },
    marginLeft: theme.spacing(-2)
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none"
    },
  },
}));

function NavigationMenu(props) {
  const classes = useStyles();

  const renderDesktopMenu = (
    <Grid container direction="row" justify="space-between" alignItems="flex-start"  >
      <Typography className={classes.namelogo} >LerAtos</Typography>
      <Typography className={classes.text} >Estúdio de Criação LerAtos</Typography>
      <div>
        <Grid container direction="row" justify="space-between" alignItems="baseline">
          {getImage() !== '' ? <Avatar src={getImage()} className={classes.small} /> :
            <Avatar className={classes.orange}>{getUser().toString()[0]}</Avatar>}
          {getUser()}
          <Chip style={{ marginLeft: 5 }} color="secondary" size="small" label={getIsGestor() ? "Gestor" : "Professor"} />

          <Link to="/login" onClick={logout} className={classes.link}>
            <span> Sair </span>
          </Link>
        </Grid>
      </div>
    </Grid>
  );

  const renderMobileMenu = (
    <Grid container direction="row" justify="space-between" alignItems="flex-start"  >
      <Typography className={classes.namelogo} >LerAtos</Typography>
      <div>
        <Grid container direction="row" justify="space-between" alignItems="baseline">
          {getImage() !== '' ? <Avatar src={getImage()} className={classes.small} /> :
            <Avatar className={classes.orange}>{getUser().toString()[0]}</Avatar>}
          {getUser()}
          <Chip style={{ marginLeft: 5 }} color="secondary" size="small" label={getIsGestor() ? "Gestor" : "Professor"} />

          <Link to="/login" onClick={logout} className={classes.linkMobile}>
            <span> Sair </span>
          </Link>
        </Grid>
      </div>
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
      <Routes />
    </>
  );
}

export default NavigationMenu;