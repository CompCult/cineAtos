import React from 'react';
import Card from '@material-ui/core/Card';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    root: {
        width: '90%',
        margin: '2% auto 2% auto',
        borderRadius: 12
    },
}));

function CardForm({ children }) {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            {children}
        </Card>
    )
}

export default CardForm;