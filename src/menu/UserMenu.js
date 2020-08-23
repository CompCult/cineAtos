import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { logout, getIsGestor, getUser, getImage } from "../services/Auth";
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import { deepOrange } from '@material-ui/core/colors';
import Chip from '@material-ui/core/Chip';

const useStyles = makeStyles(theme => ({
    orange: {
        color: theme.palette.getContrastText(deepOrange[500]),
        backgroundColor: deepOrange[500],
        marginRight: theme.spacing(1)
    },
    small: {
        width: 40,
        height: 40,
        marginRight: theme.spacing(1)
    },
    link: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'normal',
        marginLeft: 20,
        textDecoration: "none",
        color: "white",
        fontSize: 12
    },
    infoUser: {
        position: 'absolute',
        right: theme.spacing(3),
        top: 7
    }
}));

function UserMenu() {
    const classes = useStyles();

    return (
        <div className={classes.infoUser}>
            <Grid container direction="row" justify="space-between" alignItems="baseline">
                {getImage() !== '' ? <Avatar src={getImage()} className={classes.small} /> :
                    <Avatar className={classes.orange}>{getUser().toString()[0]}</Avatar>}
                {getUser()}
                <Chip style={{ marginLeft: 5 }} color="secondary" size="small" label={getIsGestor() ? "Gestor" : "Professor"} />

                <Link to="/login" onClick={logout} className={classes.link}>
                    <span> Sair </span>
                </Link>
            </Grid>
        </div>
    );
}

export default UserMenu;