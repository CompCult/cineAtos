import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    progress: {
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center',
        fontSize: 50
    },
}));

export default function CircularIndeterminate() {
    const classes = useStyles();

    return (
        <div className={classes.progress}>
            <h1>Bem vindo!</h1>
        </div>
    );
}
