import React from 'react'
import Fab from '@material-ui/core/Fab'
import { makeStyles } from '@material-ui/core/styles'
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import Button from '@material-ui/core/Button'
import { useHistory } from "react-router-dom";

const useStyles = makeStyles(theme => ({
    root: {
        margin: theme.spacing(1),
        textAlign: 'center',
        boxShadow: 'none',
        color: 'white',
    },
    color: {
        color: 'white',
        fontSize: 20
    },
    input: {
        display: 'none',
    },
    margin: {
        marginBottom: '4%',
    },
    marginLeft: {
        marginLeft: '4%',
    },
    button: {
        [theme.breakpoints.down('sm')]: {
            marginLeft: 10,
        },
    }
}));
export const ButtomAdd = ({ title }) => {
    const classes = useStyles();
    return (
        <Button variant="contained" size="small" color="secondary" className={classes.button}>
            {title}
        </Button>
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

export const ButtomSubmit = ({ title, disabled, onClick, href, cancel }) => {
    const classes = useStyles();
    let history = useHistory();

    const historyGo = () => {
        return history.go()
    }

    const buttonLink = (
        <Button variant="contained" color="secondary" href={href} className={classes.marginLeft}>
            Cancelar
        </Button>)

    const buttonClick = (
        <Button onClick={historyGo} variant="contained" color="secondary" className={classes.marginLeft}>
            Cancelar
        </Button>)

    return (
        <>
            <Button type="submit" variant="contained" color="secondary" disabled={disabled} onClick={onClick}>
                {title}
            </Button>
            {!cancel && (href ? buttonLink : buttonClick)}
        </>
    )
}

export const ButtomImport = ({ title, onChange }) => {
    const classes = useStyles();
    return (
        <div>
            <input onChange={onChange} accept="image/*" className={classes.input} id="icon-button-file" type="file" multiple />
            <label htmlFor="icon-button-file">
                <spam className={classes.color}> {title} </spam>
                <IconButton color="primary" aria-label="upload picture" component="span">
                    <PhotoCamera />
                </IconButton>
            </label>
        </div>
    )
}
