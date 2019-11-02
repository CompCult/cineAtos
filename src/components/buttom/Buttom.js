import React from 'react'
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'
import Tooltip from '@material-ui/core/Tooltip'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    root: {
        margin: theme.spacing(1),
        textAlign: 'center',
        boxShadow: 'none',
        color: 'white',
        backgroundColor: '#fa0000'
    },
}));

export const ButtomAdd = ({ title }) => {
    const classes = useStyles();
    return (
        <Tooltip title={title}>
            <Fab className={classes.root} size="small" color="secondary" aria-label="Add" >
                <AddIcon />
            </Fab>
        </Tooltip>
    )
}

export const Buttom = ({ title, onClick, icon }) => {
    const classes = useStyles();
    return (
        <div>
            <Fab className={classes.root} onClick={onClick} color="secondary" size={'small'} >
                {icon}
            </Fab>
            {title}
        </div>
    )
}

