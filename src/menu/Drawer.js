import React, { Fragment } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import Divider from '@material-ui/core/Divider'
import MenuIcon from '@material-ui/icons/Menu'
import Typography from '@material-ui/core/Typography'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import IconButton from '@material-ui/core/IconButton'
import Breadcrumb from './Breadcrumb.js'

const useStyles = makeStyles(theme => ({
  drawerPaper: {
    width: 250,
  },
  drawerTitle : {
    display: 'flex',
    padding: '0 14%',
    alignItems: 'center',
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

  function handleDrawer() {
    setOpen(!open)
  }
  
  return (
    <Fragment>
      <IconButton color="inherit" onClick={handleDrawer}>
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
        <div id='redColor' className={classes.drawerHeader}>
          <div className={classes.drawerTitle}>
            <Typography variant="h6" noWrap>
              Cine Atos
            </Typography>
          </div>
          <IconButton color="inherit" onClick={handleDrawer}>
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