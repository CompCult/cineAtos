import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import MenuItem from '@material-ui/core/MenuItem'
import Menu from '@material-ui/core/Menu'
import MenuIcon from '@material-ui/icons/Menu'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'
import Routes from '../Routes.js'
import './NavigationMenu.css'

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
  },
}))

function NavigationMenu() {
  const classes = useStyles()
  const [anchorElEscolhas, setAnchorElEscolhas] = useState(null)
  const [anchorElMissoes, setAnchorElMissoes] = useState(null)
  const [anchorElAgenda, setAnchorElAgenda] = useState(null)
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null)

  const isMenuOpenEscolhas = Boolean(anchorElEscolhas)
  const isMenuOpenMissoes = Boolean(anchorElMissoes)
  const isMenuOpenAgenda = Boolean(anchorElAgenda)

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl)

  function handleProfileMenuOpenEscolhas(event) {
    setAnchorElEscolhas(event.currentTarget)
  }
  
  function handleMenuCloseEscolhas() {
    setAnchorElEscolhas(null)
    handleMobileMenuClose()
  }

  function handleProfileMenuOpenMissoes(event) {
    setAnchorElMissoes(event.currentTarget)
  }
  
  function handleMenuCloseMissoes() {
    setAnchorElMissoes(null)
    handleMobileMenuClose()
  }

  function handleProfileMenuOpenAgenda(event) {
    setAnchorElAgenda(event.currentTarget)
  }
  
  function handleMenuCloseAgenda() {
    setAnchorElAgenda(null)
    handleMobileMenuClose()
  }

  function handleMobileMenuClose() {
    setMobileMoreAnchorEl(null)
  }

  function handleMobileMenuOpen(event) {
    setMobileMoreAnchorEl(event.currentTarget)
  }

  const renderMenuEscolhas = (
    <Menu
      anchorEl={anchorElEscolhas}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpenEscolhas}
      onClose={handleMenuCloseEscolhas}
      
    >
    <Link to="/2" id='linkMobile'> 
        <MenuItem onClick={handleMenuCloseEscolhas}> <span> Escolhas </span> </MenuItem>
    </Link>
      
      <MenuItem onClick={handleMenuCloseEscolhas}>Respostas das Escolhas</MenuItem>
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
      <MenuItem onClick={handleMenuCloseMissoes}>Missoes</MenuItem>
      <MenuItem onClick={handleMenuCloseMissoes}>Respostas das Missoes</MenuItem>
      <MenuItem onClick={handleMenuCloseMissoes}>Propostas</MenuItem>
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
      <MenuItem onClick={handleMenuCloseAgenda}>Eventos</MenuItem>
      <MenuItem onClick={handleMenuCloseAgenda}>Pedidos de Eventos</MenuItem>
    </Menu>
  )

  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem onClick={handleMobileMenuClose}>
        <Link to="/1" id='linkMobile'> <span> Pessoas </span> </Link>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpenEscolhas}>
        <p id='linkMobile'> Escolhas </p> 
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpenMissoes}>
        <p id='linkMobile'>Missoes</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpenAgenda}>
        <p id='linkMobile'>Agenda</p>
      </MenuItem>
      <MenuItem  onClick={handleMobileMenuClose}>
        <p id='linkMobile'>Painéis</p>
      </MenuItem>
      <MenuItem onClick={handleMobileMenuClose}>
        <p id='linkMobile'>Sair</p>
      </MenuItem>
    </Menu>
  )
  
  const renderDesktopMenu = (
    <div className={classes.sectionDesktop}>
        <Button color="inherit" onClick={()=> console.log('foi1')}>
            <Link to="/1" id='link'> <span> Pessoas </span> </Link>
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
            <Link to="/" id='link'> <span> Painéis </span> </Link>
        </Button>

        <Button id='logout' color="inherit" onClick={()=> console.log('foi1')}>
            <Link to="/login" id='link'> <span> Sair </span> </Link>
        </Button>
    </div>
  )

  return (
    <div className={classes.grow}>
        <AppBar position="static" color="secondary">
            <Toolbar>
            <Typography variant="h4" noWrap>
                Cine Atos
            </Typography>
            {renderDesktopMenu}
            <div className={classes.grow} />
            
            <div className={classes.sectionMobile}>
                <IconButton aria-haspopup="true" onClick={handleMobileMenuOpen} color="inherit">
                <MenuIcon />
                </IconButton>
            </div>
            </Toolbar>
        </AppBar>
        {renderMenuEscolhas}
        {renderMenuMissoes}
        {renderMenuAgenda}
        {renderMobileMenu}
        <Routes/>
    </div>
  );
}

export default NavigationMenu