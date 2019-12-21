import React from 'react'
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'
import Tooltip from '@material-ui/core/Tooltip'
import { makeStyles } from '@material-ui/core/styles'
import Icon from '@material-ui/core/Icon';
const useStyles = makeStyles(theme => ({
    root: {
        margin: theme.spacing(1),
        textAlign: 'center',
        boxShadow: 'none',
        color: 'white',
    },
}));

export const ButtomAdd = ({ title }) => {
    const classes = useStyles();
    return (
        <Tooltip title={title}>
            <Fab className={classes.root} size="small" color="primary" aria-label="Add" >
                <AddIcon />
            </Fab>
        </Tooltip>
    )
}

export const ButtomFab = ({ title, onClick, icon }) => {
    const classes = useStyles();
    return (
        <div>
            <Fab className={classes.root} onClick={onClick} color="primary" size={'small'} >
                {icon}
            </Fab>
            {title}
        </div>
    )
}

export const ButtomIcon = ({ title, icon }) => {
    return (
        <div >
            <Icon style={{ fontSize: 30, marginBottom: -9.5 }}>{icon}</Icon>

            {' ' + title}
        </div>
    )
}


