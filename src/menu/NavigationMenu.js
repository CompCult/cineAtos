import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import MenuItem from '@material-ui/core/MenuItem'
import Menu from '@material-ui/core/Menu'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'
import Routes from './Routes.js'
import Drawer from './Drawer.js'
import NameLogo from '../../src/images/name.png'
import { logout } from '../services/Auth'

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1,
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
    marginLeft: theme.spacing(-2),
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
    marginLeft: theme.spacing(-2),
  },
  namelogo: {
    maxWidth: '75%'
  },
  redColor: {
    backgroundColor: '#fa0000',
    color: 'white'
  },
  logout: {
    position: 'absolute',
    right: '1%',
  },
  link: {
    textDecoration: 'none',
    color: 'white',
    fontSize: 15
  },
  linkMobile: {
    textDecoration: 'none',
    color: 'black',
    fontSize: 15
  }
}))

function NavigationMenu() {
  const classes = useStyles()
  const [anchorElEscolhas, setAnchorElEscolhas] = useState(null)
  const [anchorElMissoes, setAnchorElMissoes] = useState(null)
  const [anchorElAgenda, setAnchorElAgenda] = useState(null)

  const isMenuOpenEscolhas = Boolean(anchorElEscolhas)
  const isMenuOpenMissoes = Boolean(anchorElMissoes)
  const isMenuOpenAgenda = Boolean(anchorElAgenda)

  function handleProfileMenuOpenEscolhas(event) {
    setAnchorElEscolhas(event.currentTarget)
  }

  function handleMenuCloseEscolhas() {
    setAnchorElEscolhas(null)
  }

  function handleProfileMenuOpenMissoes(event) {
    setAnchorElMissoes(event.currentTarget)
  }

  function handleMenuCloseMissoes() {
    setAnchorElMissoes(null)

  }

  function handleProfileMenuOpenAgenda(event) {
    setAnchorElAgenda(event.currentTarget)
  }

  function handleMenuCloseAgenda() {
    setAnchorElAgenda(null)
  }

  const renderMenuEscolhas = (
    <Menu
      anchorEl={anchorElEscolhas}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpenEscolhas}
      onClose={handleMenuCloseEscolhas}
    >
      <Link to="/quiz/meus-quizes" className={classes.linkMobile}>
        <MenuItem onClick={handleMenuCloseEscolhas}> <span> Meus Quizzes </span> </MenuItem>
      </Link>
      <Link to="/quiz/todos-os-quizes" className={classes.linkMobile}>
        <MenuItem onClick={handleMenuCloseEscolhas}> <span> Todos os Quizzes </span> </MenuItem>
      </Link>
    </Menu>
  )

  const renderMenuMissoes = (
    <Menu
      anchorEl={anchorElMissoes}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpenMissoes}
      onClose={handleMenuCloseMissoes}
    >
      <Link to="/missoes" className={classes.linkMobile}>
        <MenuItem onClick={handleMenuCloseMissoes}> <span> Missões </span> </MenuItem>
      </Link>
      <Link to="/missoes/respostas-das-missoes" className={classes.linkMobile}>
        <MenuItem onClick={handleMenuCloseMissoes}> <span> Respostas das Missões </span> </MenuItem>
      </Link>
      <Link to="/missoes/propostas" className={classes.linkMobile}>
        <MenuItem onClick={handleMenuCloseMissoes}> <span> Propostas </span> </MenuItem>
      </Link>
    </Menu>
  )

  const renderMenuAgenda = (
    <Menu
      anchorEl={anchorElAgenda}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpenAgenda}
      onClose={handleMenuCloseAgenda}
    >
      <Link to="/eventos" className={classes.linkMobile}>
        <MenuItem onClick={handleMenuCloseAgenda}> <span> Eventos </span> </MenuItem>
      </Link>
      <Link to="eventos/pedidos-de-eventos" className={classes.linkMobile}>
        <MenuItem onClick={handleMenuCloseAgenda}> <span> Pedidos de Eventos </span> </MenuItem>
      </Link>
    </Menu>
  )

  const renderDesktopMenu = (
    <div className={classes.sectionDesktop}>

      <Button color="inherit">
        <Link to="/pessoas" className={classes.link}> <span> Pessoas </span> </Link>
      </Button>

      <Button
        edge="end"
        aria-owns={isMenuOpenEscolhas ? 'material-appbar' : undefined}
        aria-haspopup="true"
        onClick={handleProfileMenuOpenEscolhas}
        color="inherit"
      >
        <span className={classes.link}> Quizzes </span>
      </Button>

      <Button
        edge="end"
        aria-owns={isMenuOpenMissoes ? 'material-appbar' : undefined}
        aria-haspopup="true"
        onClick={handleProfileMenuOpenMissoes}
        color="inherit"
      >
        <span className={classes.link}> Missões </span>
      </Button>

      <Button
        edge="end"
        aria-owns={isMenuOpenAgenda ? 'material-appbar' : undefined}
        aria-haspopup="true"
        onClick={handleProfileMenuOpenAgenda}
        color="inherit"
      >
        <span className={classes.link}> Agenda </span>
      </Button>

      <Button color="inherit">
        <Link to="/paineis" className={classes.link}> <span> Painéis </span> </Link>
      </Button>
    </div>
  )

  return (
    <div className={classes.grow}>
      <AppBar position="static" className={classes.redColor}>
        <Toolbar>
          <div className={classes.sectionMobile}>
            <Drawer />
          </div>
          <div>
            <img src={NameLogo} className={classes.namelogo} alt="namelogo" />
          </div>

          {renderDesktopMenu}
          <Button className={classes.logout} color="inherit">
            <Link to="/login" onClick={logout} className={classes.link}> <span> Sair </span> </Link>
          </Button>
        </Toolbar>
      </AppBar>
      {renderMenuEscolhas}
      {renderMenuMissoes}
      {renderMenuAgenda}
      <Routes />
    </div>
  )
}

export default NavigationMenu