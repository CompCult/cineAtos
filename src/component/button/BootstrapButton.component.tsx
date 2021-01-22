import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { LinkRouter } from '../link/Link';

const useStyles = makeStyles(theme => ({
    root: {
        width: 300,
        minWidth: 300,
        height: 51,
        marginBottom: 12,
        borderRadius: 12,
    },
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

interface BootstrapButtonInterface {
    title: string;
    href: string;
}

function BootstrapButtonCompoment({ href, title }: BootstrapButtonInterface) {
    const classes = useStyles();

    return (
        <LinkRouter to={href}>
            <BootstrapButton variant="contained" color="primary" size="large" className={classes.root} disableRipple>
                {title}
            </BootstrapButton>
        </LinkRouter>
    )
}
export default BootstrapButtonCompoment;