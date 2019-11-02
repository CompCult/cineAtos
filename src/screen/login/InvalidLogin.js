import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(theme => ({
    root: {
        width: '80%',
        maxWidth: 500,
        marginLeft: 'auto',
        marginRight: 'auto',
        backgroundColor: 'red',
        opacity: 0.8
    },
    margin: {
        padding: theme.spacing(1, 1),
        color: 'White'
    }

}));

export default function InvalidLogin() {
    const classes = useStyles();

    return (
        <Paper className={classes.root}>
            <Typography className={classes.margin} component="p">
                Houve um problema com o login, verifique usuario e senha
            </Typography>
        </Paper>

    );
}
