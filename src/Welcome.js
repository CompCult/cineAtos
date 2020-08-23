import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ButtomMenu from './components/buttom/ButtomMenu.js';
import { Grid } from '@material-ui/core';
import award from "../src/images/award.png";
import mapPin from "../src/images/map-pin.png";
import shoppingCart from "../src/images/shopping-cart.png";
import slack from "../src/images/slack.png";
import users from "../src/images/users.png";
import quizzes from "../src/images/Vector.png";

const useStyles = makeStyles(theme => ({
    root: {
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center',
        fontSize: 50,
        marginTop: 100
    },
    sectionMobile: {
        display: "flex",
        [theme.breakpoints.up("md")]: {
            display: "none"
        },
    },
    sectionDesktop: {
        display: "none",
        [theme.breakpoints.up("md")]: {
            display: "flex"
        },
    },
}));

export default function CircularIndeterminate() {
    const classes = useStyles();
    const [menuNumber, setmenuNumber] = useState(0);
    const [menuQuizzes] = useState([{ title: 'Meus Quizzes', href: '/quiz/meus-quizes' }, { title: 'Todos os Quizzes', href: '/quiz/todos-quizes' }]);
    const [menuMissions] = useState([{ title: 'Minhas Missões', href: '/missoes/minhas-missoes' }, { title: 'Todas as Missões', href: '/missoes/todas-missoes' }]);
    const [menuMiniGames] = useState([{ title: 'Jogo da Memória', href: '/miniGames/memoria' }]);
    const [menuStore] = useState([{ title: 'Todos os Itens', href: '/loja-virtual/todos-itens' }, { title: 'Obra dos Alunos', href: '/loja-virtual/todos-itens-alunos' }]);
    const menu = (value) => {
        setmenuNumber(value);
    }

    const renderDesktopMenu = (
        <Grid container >
            <Grid container direction="row" justify="space-evenly" alignItems="flex-start" >
                <ButtomMenu title="pessoas" id={1} isMenu={true} href="/pessoas" image={users} />
                <ButtomMenu title="quizzes" id={2} value={menuNumber} onClick={() => menu(2)} arraySubMenu={menuQuizzes} image={quizzes} />
                <ButtomMenu title="missões" id={3} value={menuNumber} onClick={() => menu(3)} arraySubMenu={menuMissions} image={award} />
            </Grid>
            <Grid container direction="row" justify="space-evenly" alignItems="flex-start">
                <ButtomMenu title="mini games" id={4} value={menuNumber} onClick={() => menu(4)} arraySubMenu={menuMiniGames} color="secondary" image={slack} />
                <ButtomMenu title="loja virtual" id={5} value={menuNumber} onClick={() => menu(5)} color="secondary" arraySubMenu={menuStore} image={shoppingCart} />
                <ButtomMenu title="mapa do jogo" color="secondary" id={6} isMenu={true} href="/mapa-do-jogo" image={mapPin} />
            </Grid>
        </Grid>
    );

    const renderMobileMenu = (
        <Grid container >
            <Grid container direction="row" justify="space-evenly" alignItems="flex-start" >
                <ButtomMenu title="pessoas" id={1} isMenu={true} href="/pessoas" image={users} />
                <ButtomMenu title="quizzes" id={2} value={menuNumber} onClick={() => menu(2)} arraySubMenu={menuQuizzes} image={quizzes} />
            </Grid>
            <Grid container direction="row" justify="space-evenly" alignItems="flex-start" >
                <ButtomMenu title="missões" id={3} value={menuNumber} onClick={() => menu(3)} arraySubMenu={menuMissions} image={award} />
                <ButtomMenu title="mini games" id={4} value={menuNumber} onClick={() => menu(4)} arraySubMenu={menuMiniGames} color="secondary" image={slack} />
            </Grid>
            <Grid container direction="row" justify="space-evenly" alignItems="flex-start">
                <ButtomMenu title="loja virtual" id={5} value={menuNumber} onClick={() => menu(5)} color="secondary" arraySubMenu={menuStore} image={shoppingCart} />
                <ButtomMenu title="mapa do jogo" color="secondary" id={6} isMenu={true} href="/mapa-do-jogo" image={mapPin} />
            </Grid>
        </Grid>
    );


    return (
        <div className={classes.root}>
            <div className={classes.sectionDesktop}>
                {renderDesktopMenu}
            </div>
            <div className={classes.sectionMobile}>
                {renderMobileMenu}
            </div>
        </div>
    );
}
