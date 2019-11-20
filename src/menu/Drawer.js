import React, { Fragment } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import Divider from '@material-ui/core/Divider'
import MenuIcon from '@material-ui/icons/Menu'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import IconButton from '@material-ui/core/IconButton'
import Breadcrumb from './Breadcrumb.js'
import Box from '@material-ui/core/Box'

import Typography from '@material-ui/core/Typography'
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
    fontSize: 20,
    marginTop: theme.spacing(-1),
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
      <IconButton color="secondary" onClick={handleDrawer}>
        <MenuIcon />
      </IconButton>
      <Drawer variant="persistent" anchor="left" open={open} classes={{ paper: classes.drawerPaper, }}>
        <div className={classes.drawerHeader}>
        <div className={classes.namelogo} >
            <Box fontStyle="normal" m={1}>
              <Typography variant="h6" noWrap>
                Painel <b>CompCult</b>
              </Typography>
            </Box>
          </div>
          <IconButton color="secondary" onClick={handleDrawer}>
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