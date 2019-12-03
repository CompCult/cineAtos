import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import CircularProgress from '@material-ui/core/CircularProgress'

const useStyles = makeStyles(theme => ({
    progress: {
        position: 'absolute',
        margin: 'auto',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
    },
}));

export default function CircularIndeterminate() {
    const classes = useStyles();

    return (
        <CircularProgress className={classes.progress} color="primary" size={100} />
    );
}
