import React, { useState } from 'react'
import PropTypes from 'prop-types'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Collapse from '@material-ui/core/Collapse'
import ListItemText from '@material-ui/core/ListItemText'
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'
import { makeStyles } from '@material-ui/core/styles'
import { Link as RouterLink } from 'react-router-dom'

const breadcrumbNameMap = {
  '/inbox': 'Inbox',
  '/inbox/important': 'Important',
  '/1': 'Pessoas',
  '/spam': 'Spam',
  '/drafts': 'Drafts',
}

function ListItemLink(props) {
  const { to, open, ...other } = props
  const primary = breadcrumbNameMap[to]

  return (
    <li>
      <ListItem button component={RouterLink} to={to} {...other}>
        <ListItemText primary={primary} />
        {open != null ? open ? <ExpandLess /> : <ExpandMore /> : null}
      </ListItem>
    </li>
  )
}

ListItemLink.propTypes = {
  open: PropTypes.bool,
  to: PropTypes.string.isRequired,
}

const useStyles = makeStyles(theme => ({
  lists: {
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing(1),
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}))


function RouterBreadcrumbs() {
    const classes = useStyles()
    const [open, setOpen] = useState(false)

    function handleClickOpen() {
        setOpen(!open);
    }

    return (
        <div className={classes.lists}>
            <List component="nav">
                <ListItemLink to="/1" />
                <ListItemLink to="/inbox" open={open} onClick={handleClickOpen} />
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                    <ListItemLink to="/inbox/important" className={classes.nested} />
                    </List>
                </Collapse>
            </List>
        </div>
    )
}

export default RouterBreadcrumbs
