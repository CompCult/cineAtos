import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Grid } from '@material-ui/core';
import BootstrapButton from './BootstrapButton.js';

const useStyles = makeStyles(theme => ({
    root: {
        width: 300,
        minWidth: 300,
        height: 114,
        borderRadius: 12,
        marginBottom: 71
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
    subMenu: {
        width: 300,
        minWidth: 300,
        height: 114,
        minHeight: 114,
        marginBottom: 71
    }

}));

function ButtomMenu({ title, href, id, value, onClick, arraySubMenu, isMenu, color, image }) {
    const classes = useStyles();

    const buttomMenu = () => {
        return (
            <Button variant="contained" color={!color ? "primary" : color} size="large" href={href} className={classes.root} onClick={onClick}>
                <div className={classes.img} >
                    <img src={image} width={80} height={80} alt="img" />
                </div>
                <div className={classes.text} >
                    <span className={classes.title}> {title} </span>
                </div>
            </Button>
        )
    }

    const buttomSubMenu = (array) => {
        return (
            <div className={classes.subMenu}>
                <Grid container direction="column" justify="space-between" alignItems="center" >
                    {array.map((obj, index) => {
                        return <BootstrapButton key={index} color={!color ? "primary" : color} title={obj.title} href={obj.href} />
                    })}
                </Grid>
            </div>
        )
    }

    return (!isMenu && (id === value)) ? buttomSubMenu(arraySubMenu) : buttomMenu();
}
export default ButtomMenu;