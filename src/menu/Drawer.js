import React, { Fragment } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import Divider from '@material-ui/core/Divider'
import MenuIcon from '@material-ui/icons/Menu'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import IconButton from '@material-ui/core/IconButton'
import Breadcrumb from './Breadcrumb.js'

const useStyles = makeStyles(theme => ({
  drawerPaper: {
    width: 250,
  },
  listItens : {
    ...theme.mixins.toolbar,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 8px',
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
}))

function PersistentDrawerLeft() {
  const classes = useStyles()
  const [open, setOpen] = React.useState(false)

  function handleDrawerOpen() {
    setOpen(true);
  }

  function handleDrawerClose() {
    setOpen(false);
  }

  return (
    <Fragment>
      <IconButton color="inherit" onClick={handleDrawerOpen}>
        <MenuIcon/>
      </IconButton>
      <Drawer
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <Breadcrumb/>
      </Drawer>
    </Fragment>
  )
}

export default PersistentDrawerLeft