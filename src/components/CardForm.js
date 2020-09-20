import React from 'react';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({

    card: {
        padding: '30px 20px 20px 20px',
        backgroundColor: '#58AFFF',
        borderRadius: 6,
        margin: '25px 0px 25px 0px'
    }
}));

function CardForm({ children }) {
    const classes = useStyles();
    return (
        <div className={classes.card}>
            {children}
        </div>
    )
}

export default CardForm;