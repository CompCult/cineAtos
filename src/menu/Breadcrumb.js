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
    '/pessoas': 'Pessoas',

    '/escolhas': 'Escolhas',
    '/escolhas/respostas-das-escolhas': 'Respostas das Escolhas',

    '/missoes': 'Missões',
    '/missoes/respostas-das-missoes': 'Respostas das Missões',
    '/missoes/propostas': 'Propostas',

    '/eventos': 'Eventos',
    '/eventos/pedidos-de-eventos': 'Pedidos de Eventos',

    '/paineis': 'Painéis',
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
    const [openEscolhas, setOpenEscolhas] = useState(false)
    const [openMissoes, setOpenMissoes] = useState(false)
    const [openAgenda, setOpenAgenda] = useState(false)

    function handleClickOpenEscolhas() {
        setOpenEscolhas(!openEscolhas)
    }

    function handleClickOpenMissoes() {
        setOpenMissoes(!openMissoes)
    }

    function handleClickOpenAgenda() {
        setOpenAgenda(!openAgenda)
    }

    return (
        <div className={classes.lists}>
            <List component="nav">
                <ListItemLink to="/pessoas" />

                <ListItemLink to="/escolhas" open={openEscolhas} onClick={handleClickOpenEscolhas} />
                <Collapse in={openEscolhas} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItemLink to="/escolhas" className={classes.nested} />
                    </List>
                    <List component="div" disablePadding>
                        <ListItemLink to="/escolhas/respostas-das-escolhas" className={classes.nested} />
                    </List>
                </Collapse>

                <ListItemLink to="/missoes" open={openMissoes} onClick={handleClickOpenMissoes} />
                <Collapse in={openMissoes} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItemLink to="/missoes" className={classes.nested} />
                    </List>
                    <List component="div" disablePadding>
                        <ListItemLink to="/missoes/respostas-das-missoes" className={classes.nested} />
                    </List>
                    <List component="div" disablePadding>
                        <ListItemLink to="/missoes/propostas" className={classes.nested} />
                    </List>
                </Collapse>

                <ListItemLink to="/eventos" open={openAgenda} onClick={handleClickOpenAgenda} />
                <Collapse in={openAgenda} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItemLink to="/eventos" className={classes.nested} />
                    </List>
                    <List component="div" disablePadding>
                        <ListItemLink to="/eventos/pedidos-de-eventos" className={classes.nested} />
                    </List>
                </Collapse>

                <ListItemLink to="/paineis" />
            </List>
        </div>
    )
}

export default RouterBreadcrumbs
