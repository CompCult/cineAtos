import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import Routes from "./Routes.js";
import { logout, getIsGestor, getIsPermissaoProfessor, getUser, getImage } from "../services/Auth";
import Box from "@material-ui/core/Box";
import Drawer from "./Drawer.js";
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import { deepOrange } from '@material-ui/core/colors';
import Chip from '@material-ui/core/Chip';

const useStyles = makeStyles(theme => ({
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
    marginRight: theme.spacing(1)
  },
  small: {
    width: theme.spacing(4),
    height: theme.spacing(4),
    marginRight: theme.spacing(1)
  },
  grow: {
    flexGrow: 1,
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
    marginLeft: theme.spacing(-2)
  },
  namelogo: {
    marginRight: theme.spacing(3),
    fontSize: 20,
    color: "#ffffff",
    marginTop: theme.spacing(-1)
  },
  logout: {
    position: "absolute",
    right: "1%"
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: 15
  },
  linkMobile: {
    textDecoration: "none",
    color: "black",
    fontSize: 15
  }
}));

function NavigationMenu() {
  const classes = useStyles();
  const [anchorElEscolhas, setAnchorElEscolhas] = useState(null);
  const [anchorElMissoes, setAnchorElMissoes] = useState(null);
  //const [anchorElAgenda, setAnchorElAgenda] = useState(null);
  const [anchorElMemories, setAnchorElMemories] = useState(null);

  const isMenuOpenEscolhas = Boolean(anchorElEscolhas);
  const isMenuOpenMissoes = Boolean(anchorElMissoes);
  //const isMenuOpenAgenda = Boolean(anchorElAgenda);
  const isMenuOpenMemories = Boolean(anchorElMemories);

  function handleProfileMenuOpenEscolhas(event) {
    setAnchorElEscolhas(event.currentTarget);
  }

  function handleMenuCloseEscolhas() {
    setAnchorElEscolhas(null);
  }

  function handleProfileMenuOpenMissoes(event) {
    setAnchorElMissoes(event.currentTarget);
  }

  function handleMenuCloseMissoes() {
    setAnchorElMissoes(null);
  }
  /*
  function handleProfileMenuOpenAgenda(event) {
    setAnchorElAgenda(event.currentTarget);
  }

  function handleMenuCloseAgenda() {
    setAnchorElAgenda(null);
  }
*/

  function handleProfileMenuOpenMemories(event) {
    setAnchorElMemories(event.currentTarget);
  }

  function handleMenuCloseMemories() {
    setAnchorElMemories(null);
  }

  const renderMenuEscolhas = (
    <Menu
      anchorEl={anchorElEscolhas}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpenEscolhas}
      onClose={handleMenuCloseEscolhas}
    >
      <Link to="/quiz/meus-quizes" className={classes.linkMobile}>
        <MenuItem onClick={handleMenuCloseEscolhas}>
          Meus Quizzes
        </MenuItem>
      </Link>
      <Link to="/quiz/todos-quizes" className={classes.linkMobile}>
        <MenuItem onClick={handleMenuCloseEscolhas}>
          Todos os Quizzes
        </MenuItem>
      </Link>
    </Menu>
  );

  const renderMenuMissoes = (
    <Menu
      anchorEl={anchorElMissoes}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpenMissoes}
      onClose={handleMenuCloseMissoes}
    >
      <Link to="/missoes/minhas-missoes" className={classes.linkMobile}>
        <MenuItem onClick={handleMenuCloseMissoes}>
          Minhas Missões
        </MenuItem>
      </Link>
      <Link to="/missoes/todas-missoes" className={classes.linkMobile}>
        <MenuItem onClick={handleMenuCloseMissoes}>
          Todas as Missões
        </MenuItem>
      </Link>
    </Menu>
  );
  /*
  const renderMenuAgenda = (
    <Menu
      anchorEl={anchorElAgenda}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpenAgenda}
      onClose={handleMenuCloseAgenda}
    >
      <Link to="/eventos" className={classes.linkMobile}>
        <MenuItem onClick={handleMenuCloseAgenda}>
          <span> Eventos </span>
        </MenuItem>
      </Link>
      <Link to="eventos/pedidos-de-eventos" className={classes.linkMobile}>
        <MenuItem onClick={handleMenuCloseAgenda}>
          <span> Pedidos de Eventos </span>
        </MenuItem>
      </Link>
    </Menu>
  );
*/
  const renderMenuMemories = (
    <Menu
      anchorEl={anchorElMemories}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpenMemories}
      onClose={handleMenuCloseMemories}
    >
      <Link to="/miniGames/menoria" className={classes.linkMobile}>
        <MenuItem onClick={handleMenuCloseMemories}>
          Jogo da memória
        </MenuItem>
      </Link>
      <Link to="/miniGames/forca" className={classes.linkMobile}>
        <MenuItem onClick={handleMenuCloseMemories}>
          Jogo da forca
        </MenuItem>
      </Link>
    </Menu>
  );

  const listPermissionAll = () => {
    return (
      <>
        <Button
          edge="end"
          aria-owns={isMenuOpenEscolhas ? "material-appbar" : undefined}
          aria-haspopup="true"
          onClick={handleProfileMenuOpenEscolhas}
          color="inherit"
        >
          <span className={classes.link}> Quizzes </span>
        </Button>

        <Button
          edge="end"
          aria-owns={isMenuOpenMissoes ? "material-appbar" : undefined}
          aria-haspopup="true"
          onClick={handleProfileMenuOpenMissoes}
          color="inherit"
        >
          <span className={classes.link}> Missões </span>
        </Button>

        <Button
          edge="end"
          aria-owns={isMenuOpenMemories ? "material-appbar" : undefined}
          aria-haspopup="true"
          onClick={handleProfileMenuOpenMemories}
          color="inherit"
        >
          <span className={classes.link}> Mini Games </span>
        </Button>


        <Button
          edge="end"
          aria-owns={isMenuOpenMemories ? "material-appbar" : undefined}
          aria-haspopup="true"
          color="inherit"
        >
          <Link to="/loja-virtual/todos-itens" className={classes.link}> Loja Virtual </Link>
        </Button>
      </>
    )
  }

  const listPermissionWithout = () => {
    return (
      <>
        <Button color="inherit">
          <Link to="/quiz/todos-quizes" className={classes.link}>
            Todos Quizzes
          </Link>
        </Button>

        <Button color="inherit">
          <Link to="/missoes/todas-missoes" className={classes.link}>
            Todas Missões
          </Link>
        </Button>
      </>
    )
  }

  const renderDesktopMenu = (
    <div className={classes.sectionDesktop}>
      {getIsGestor() &&
        <Button color="inherit">
          <Link to="/pessoas" className={classes.link}>
            Pessoas
          </Link>
        </Button>
      }

      {(getIsGestor() || getIsPermissaoProfessor()) ? listPermissionAll() : listPermissionWithout()}

      {/*
      <Button
        edge="end"
        aria-owns={isMenuOpenAgenda ? 'material-appbar' : undefined}
        aria-haspopup="true"
        onClick={handleProfileMenuOpenAgenda}
        color="inherit"
      >
        <span className={classes.link}> Agenda </span>
      </Button>
    */}
    </div>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="fixed" color="primary">
        <Toolbar>
          <div className={classes.sectionMobile}>
            <Drawer />
          </div>
          <div className={classes.namelogo}>
            <Box fontStyle="normal" m={1}>
              <b>LerAtos</b>
            </Box>
          </div>

          {renderDesktopMenu}
          <div className={classes.logout}>
            <Grid container direction="row" justify="flex-start" alignItems="baseline">
              {getImage() !== '' ? <Avatar src={getImage()} className={classes.small} /> :
                <Avatar className={classes.orange}>{getUser().toString()[0]}</Avatar>}
              {getUser()}
              <Chip style={{ marginLeft: 5 }} color="secondary" size="small" label={getIsGestor() ? "Gestor" : "Professor"} />

              <Button color="inherit">
                <Link to="/login" onClick={logout} className={classes.link}>
                  <span> Sair </span>
                </Link>
              </Button>
            </Grid>
          </div>
        </Toolbar>
      </AppBar>
      {renderMenuEscolhas}
      {renderMenuMissoes}
      {/*renderMenuAgenda*/}
      {renderMenuMemories}
      <Routes />
    </div>
  );
}

export default NavigationMenu;
