import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import CircularProgress from '@material-ui/core/CircularProgress'

const useStyles = makeStyles(theme => ({
    progress: {
        margin: theme.spacing(2),
    },
    center: {
        marginTop: '25%',
        textAlign: 'center',
        justifyContent: 'center'
    }
}));

export default function CircularIndeterminate() {
    const classes = useStyles();

    return (
        <div className={classes.center}>
            <CircularProgress className={classes.progress} color="secondary" size={100} />
        </div>
    );
}
