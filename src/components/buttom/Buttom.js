import React from 'react'
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'
import Tooltip from '@material-ui/core/Tooltip'
import { makeStyles } from '@material-ui/core/styles'
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import Button from '@material-ui/core/Button'

const useStyles = makeStyles(theme => ({
    root: {
        margin: theme.spacing(1),
        textAlign: 'center',
        boxShadow: 'none',
        color: 'white',
    },
    input: {
        display: 'none',
    },
    margin: {
        marginBottom: '4%',
    }
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

export const ButtomAdvancedOptions = ({ onClick }) => {
    const classes = useStyles();
    return (
        <div className={classes.margin}>
            <Button variant="contained" color="primary" onClick={onClick}>
                Opções Avançadas
            </Button>
        </div>
    )
}

export const ButtomSubmit = ({ title, disabled, onClick }) => {
    return (
        <Button type="submit" variant="contained" color="primary" disabled={disabled} onClick={onClick}>
            {title}
        </Button>
    )
}

export const ButtomImport = ({ title, onChange }) => {
    const classes = useStyles();
    return (
        <div>
            <input onChange={onChange} accept="image/*" className={classes.input} id="icon-button-file" type="file" />
            <label htmlFor="icon-button-file">
                {title}
                <IconButton color="primary" aria-label="upload picture" component="span">
                    <PhotoCamera />
                </IconButton>
            </label>
        </div>
    )
}
