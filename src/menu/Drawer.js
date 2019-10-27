import React, { Fragment } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import Divider from '@material-ui/core/Divider'
import MenuIcon from '@material-ui/icons/Menu'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import IconButton from '@material-ui/core/IconButton'
import Breadcrumb from './Breadcrumb.js'
import NameLogo from '../../src/images/name.png'

const useStyles = makeStyles(theme => ({
  drawerPaper: {
    width: 240,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 8px',
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
    backgroundColor: '#fa0000',
    color: 'white'
  },
  namelogo: {
    maxWidth: '75%'
  },
}));

function PersistentDrawerLeft() {
  const classes = useStyles()
  const [open, setOpen] = React.useState(false)

  function handleDrawer() {
    setOpen(!open)
  }

  return (
    <Fragment>
      <IconButton color="inherit" onClick={handleDrawer}>
        <MenuIcon />
      </IconButton>
      <Drawer variant="persistent" anchor="left" open={open} classes={{ paper: classes.drawerPaper, }}>
        <div className={classes.drawerHeader}>
          <div>
            <img src={NameLogo} className={classes.namelogo} alt="namelogo" />
          </div>
          <IconButton color="inherit" onClick={handleDrawer}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <Breadcrumb />
      </Drawer>
    </Fragment>
  )
}

export default PersistentDrawerLeft