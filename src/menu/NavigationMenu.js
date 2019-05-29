import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import MenuItem from '@material-ui/core/MenuItem'
import Menu from '@material-ui/core/Menu'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'
import Routes from '../Routes.js'
import './NavigationMenu.css'
import Drawer from './Drawer.js'
 
const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1,
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
    marginLeft: theme.spacing(2),
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
    marginLeft: theme.spacing(-2),
  },
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
      <Link to="/escolhas" id='linkMobile'> 
          <MenuItem onClick={handleMenuCloseEscolhas}> <span> Escolhas </span> </MenuItem>
      </Link>
      <Link to="/escolhas/respostas-das-escolhas" id='linkMobile'> 
          <MenuItem onClick={handleMenuCloseEscolhas}> <span> Respostas das Escolhas </span> </MenuItem>
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
      <Link to="/missoes" id='linkMobile'> 
          <MenuItem onClick={handleMenuCloseEscolhas}> <span> Missões </span> </MenuItem>
      </Link>
      <Link to="/missoes/respostas-das-missoes" id='linkMobile'> 
          <MenuItem onClick={handleMenuCloseEscolhas}> <span> Respostas das Missões </span> </MenuItem>
      </Link>
      <Link to="/missoes/propostas" id='linkMobile'> 
          <MenuItem onClick={handleMenuCloseEscolhas}> <span> Propostas </span> </MenuItem>
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
      <Link to="/eventos" id='linkMobile'> 
          <MenuItem onClick={handleMenuCloseEscolhas}> <span> Eventos </span> </MenuItem>
      </Link>
      <Link to="eventos/pedidos-de-eventos" id='linkMobile'> 
          <MenuItem onClick={handleMenuCloseEscolhas}> <span> Pedidos de Eventos </span> </MenuItem>
      </Link>
    </Menu>
  )

  const renderDesktopMenu = (
    <div className={classes.sectionDesktop}>

        <Button color="inherit" onClick={()=> console.log('foi1')}>
            <Link to="/pessoas" id='link'> <span> Pessoas </span> </Link>
        </Button>

        <Button
            edge="end"
            aria-owns={isMenuOpenEscolhas ? 'material-appbar' : undefined}
            aria-haspopup="true"
            onClick={handleProfileMenuOpenEscolhas}
            color="inherit"
        >
            <span id='link'> Escolhas </span>        
        </Button>

        <Button
            edge="end"
            aria-owns={isMenuOpenMissoes ? 'material-appbar' : undefined}
            aria-haspopup="true"
            onClick={handleProfileMenuOpenMissoes}
            color="inherit"
        >
            <span id='link'> Missões </span>
        </Button>

        <Button
            edge="end"
            aria-owns={isMenuOpenAgenda ? 'material-appbar' : undefined}
            aria-haspopup="true"
            onClick={handleProfileMenuOpenAgenda}
            color="inherit"
        >
            <span id='link'> Agenda </span>
        </Button>

        <Button color="inherit" onClick={()=> console.log('foi1')}>
            <Link to="/paineis" id='link'> <span> Painéis </span> </Link>
        </Button>
    </div>
  )

  return (
    <div className={classes.grow}>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <div className={classes.sectionMobile}>
            <Drawer/>
          </div>
          <Typography variant="h6" noWrap>
            Cine Atos
          </Typography>
          {renderDesktopMenu}
          <Button id='logout' color="inherit" onClick={()=> console.log('foi1')}>
            <Link to="/login" id='link'> <span> Sair </span> </Link>
          </Button>
        </Toolbar>
      </AppBar>
      {renderMenuEscolhas}
      {renderMenuMissoes}
      {renderMenuAgenda}
      <Routes/>
    </div>
  );
}

export default NavigationMenu