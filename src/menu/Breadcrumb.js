import React from 'react'
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
}))

function RouterBreadcrumbs() {
    const classes = useStyles()

    const [openChoices, setOpenChoices] = React.useState(false);
    const [openMission, setOpenMission] = React.useState(false);
    const [openEvents, setOpenEvents] = React.useState(false);

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
            <Link to="/pessoas" id='linkBreadcromb'>

                <ListItem button>
                    <ListItemText primary="Pessoas" />
                </ListItem>

            </Link>

            <ListItem button onClick={handleClickChoices}>
                <ListItemText primary="Escolhas" />
                {openChoices ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={openChoices} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>

                    <Link to="/escolhas" id='linkBreadcromb'>
                        <ListItem button>
                            <ListItemText className={classes.nested} primary="Escolhas" />
                        </ListItem>
                    </Link>

                    <Link to="/escolhas/respostas-das-escolhas" id='linkBreadcromb'>
                        <ListItem button>
                            <ListItemText className={classes.nested} primary="Respostas das Escolhas" />
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

                    <Link to="/missoes" id='linkBreadcromb'>
                        <ListItem button>
                            <ListItemText className={classes.nested} primary="Missões" />
                        </ListItem>
                    </Link>

                    <Link to="/missoes/respostas-das-missoes" id='linkBreadcromb'>
                        <ListItem button>
                            <ListItemText className={classes.nested} primary="Respostas das Missões" />
                        </ListItem>
                    </Link>

                    <Link to="/missoes/propostas" id='linkBreadcromb'>
                        <ListItem button>
                            <ListItemText className={classes.nested} primary="Propostas" />
                        </ListItem>
                    </Link>

                </List>
            </Collapse>

            <ListItem button onClick={handleClickEvents}>
                <ListItemText primary="Eventos" />
                {openEvents ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={openEvents} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>

                    <Link to="/eventos" id='linkBreadcromb'>
                        <ListItem button>
                            <ListItemText className={classes.nested} primary="Eventos" />
                        </ListItem>
                    </Link>

                    <Link to="/eventos/pedidos-de-eventos" id='linkBreadcromb'>
                        <ListItem button>
                            <ListItemText className={classes.nested} primary="Pedidos de Eventos" />
                        </ListItem>
                    </Link>

                </List>
            </Collapse>
            <Link to="/paineis" id='linkMobile'>

                <ListItem button>
                    <ListItemText primary="Painéis" />
                </ListItem>

            </Link>
        </List>
    )
}

export default RouterBreadcrumbs