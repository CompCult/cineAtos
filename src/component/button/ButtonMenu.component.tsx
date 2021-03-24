import React, { MouseEvent } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        width: 300,
        minWidth: 300,
        height: 114,
        borderRadius: 12,
        marginBottom: 40
    },
    img: {
        marginLeft: -10,
        width: 132,
        textAlign: 'left'
    },
    text: {
        width: 168,
        textAlign: 'left',
    },
    title: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 900,
        fontSize: 32,
        lineHeight: 1
    },

}));

interface ButtomMenuInterface {
    title: string;
    href?: string;
    onClick?(e: MouseEvent<HTMLElement>): void;
    image: any;
}

function ButtomMenu({ title, href, onClick, image }: ButtomMenuInterface) {
    const classes = useStyles();

    return (
        <Button variant="contained" href={href} color="primary" size="large" className={classes.root} onClick={onClick}>
            <div className={classes.img} >
                <img src={image} width={80} height={80} alt="img" />
            </div>
            <div className={classes.text} >
                <span className={classes.title}> {title} </span>
            </div>
        </Button>
    )
}
export default ButtomMenu;