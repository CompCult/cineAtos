import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import ButtomMenu from './components/buttom/ButtomMenu.js';
import { Grid } from '@material-ui/core'
const useStyles = makeStyles(theme => ({
    root: {
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center',
        fontSize: 50,
        marginTop: 100
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

    return (
        <div className={classes.root}>
            <Grid container >
                <Grid container direction="row" justify="space-evenly" alignItems="flex-start" >
                    <ButtomMenu title="pessoas" id={1} isMenu={true} href="/pessoas" />
                    <ButtomMenu title="quizzes" id={2} value={menuNumber} onClick={() => menu(2)} arraySubMenu={menuQuizzes} />
                    <ButtomMenu title="missões" id={3} value={menuNumber} onClick={() => menu(3)} arraySubMenu={menuMissions} />
                </Grid>
                <Grid container direction="row" justify="space-evenly" alignItems="flex-start">
                    <ButtomMenu title="mini games" id={4} value={menuNumber} onClick={() => menu(4)} arraySubMenu={menuMiniGames} color="secondary" />
                    <ButtomMenu title="loja virtual" id={5} value={menuNumber} onClick={() => menu(5)} color="secondary" arraySubMenu={menuStore} />
                    <ButtomMenu title="mapa do jogo" color="secondary" id={6} isMenu={true} href="/mapa-do-jogo" />
                </Grid>
            </Grid>
        </div>
    );
}
