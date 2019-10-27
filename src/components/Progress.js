import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import CircularProgress from '@material-ui/core/CircularProgress'

const useStyles = makeStyles(theme => ({
    progress: {
        position: 'absolute',
        top: '40%',
        marginLeft: '45%',
        marginRight: '50%',
    },
}));

export default function CircularIndeterminate() {
    const classes = useStyles();

    return (
        <CircularProgress className={classes.progress} color="secondary" size={100} />
    );
}
