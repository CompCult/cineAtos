import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Collapse from '@material-ui/core/Collapse'
import { makeStyles } from '@material-ui/core/styles'
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'
import ListItemText from '@material-ui/core/ListItemText'

const useStyles = makeStyles(theme => ({
    nested: {
        paddingLeft: theme.spacing(3),
    },
    linkBreadcromb: {
        textDecoration: 'none',
        color: 'black'
    }
}))

function RouterBreadcrumbs() {
    const classes = useStyles()

    const [openChoices, setOpenChoices] = useState(false);
    const [openMission, setOpenMission] = useState(false);
    const [openEvents, setOpenEvents] = useState(false);

    function handleClickChoices() {
        setOpenChoices(!openChoices);
    }

    function handleClickMission() {
        setOpenMission(!openMission);
    }

    function handleClickEvents() {
        setOpenEvents(!openEvents);
    }

    return (
        <List>
            <Link to="/pessoas" className={classes.linkBreadcromb}>

                <ListItem button>
                    <ListItemText primary="Pessoas" />
                </ListItem>

            </Link>

            <ListItem button onClick={handleClickChoices}>
                <ListItemText primary="Quizz" />
                {openChoices ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={openChoices} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>

                    <Link to="/quiz/meus-quizes" className={classes.linkBreadcromb}>
                        <ListItem button>
                            <ListItemText className={classes.nested} primary="Meus Quizzes" />
                        </ListItem>
                    </Link>

                    <Link to="/quiz/todos-quizes" className={classes.linkBreadcromb}>
                        <ListItem button>
                            <ListItemText className={classes.nested} primary="Todos os Quizzes" />
                        </ListItem>
                    </Link>
                </List>
            </Collapse>

            <ListItem button onClick={handleClickMission}>
                <ListItemText primary="Missões" />
                {openMission ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={openMission} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>

                    <Link to="/missoes/minhas-missoes" className={classes.linkBreadcromb}>
                        <ListItem button>
                            <ListItemText className={classes.nested} primary="Minhas Missões" />
                        </ListItem>
                    </Link>

                    <Link to="/missoes/todas-missoes" className={classes.linkBreadcromb}>
                        <ListItem button>
                            <ListItemText className={classes.nested} primary="Todas as Missões" />
                        </ListItem>
                    </Link>

                </List>
            </Collapse>

            {/*

            <ListItem button onClick={handleClickEvents}>
                <ListItemText primary="Eventos" />
                {openEvents ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={openEvents} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>

                    <Link to="/eventos" className={classes.linkBreadcromb}>
                        <ListItem button>
                            <ListItemText className={classes.nested} primary="Eventos" />
                        </ListItem>
                    </Link>

                    <Link to="/eventos/pedidos-de-eventos" className={classes.linkBreadcromb}>
                        <ListItem button>
                            <ListItemText className={classes.nested} primary="Pedidos de Eventos" />
                        </ListItem>
                    </Link>

                </List>
            </Collapse>
            */}
        </List>
    )
}

export default RouterBreadcrumbs