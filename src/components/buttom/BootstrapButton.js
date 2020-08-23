import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
    root: {
        width: 300,
        minWidth: 300,
        height: 51,
        marginBottom: 12,
        borderRadius: 12,
    },
    link: {
        textDecoration: 'none',
        marginTop: -10
    }
}));

const BootstrapButton = withStyles({
    root: {
        boxShadow: 'none',
        fontStyle: 'normal',
        fontWeight: 900,
        textTransform: 'none',
        fontSize: 28,
        padding: '6px 12px',
        border: '1px solid',
        lineHeight: 1,
        backgroundColor: '#0063cc',
        borderColor: '#0063cc',
        fontFamily: 'Roboto',
        '&:hover': {
            backgroundColor: '#0069d9',
            borderColor: '#0062cc',
            boxShadow: 'none',
        },
        '&:active': {
            boxShadow: 'none',
            backgroundColor: '#0062cc',
            borderColor: '#005cbf',
        },
        '&:focus': {
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
        },
    },
})(Button);

function BootstrapButtonCompoment({ index, href, title, color }) {
    const classes = useStyles();

    return (
        <Link to={href} className={classes.link}>
            <BootstrapButton key={index} variant="contained" color={color} size="large" className={classes.root} disableRipple>
                {title}
            </BootstrapButton>
        </Link>
    )
}
export default BootstrapButtonCompoment;