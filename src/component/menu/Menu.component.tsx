import React, { useState } from 'react';
import award from "../../../src/assets/award.png";
import mapPin from "../../../src/assets/map-pin.png";
import shoppingCart from "../../../src/assets/shopping-cart.png";
import slack from "../../../src/assets/slack.png";
import users from "../../../src/assets/users.png";
import quizzes from "../../../src/assets/Vector.png";
import ListPages from '../sidebar/ListPages.component';
import GridComponent from '../grid/GridComponent.component';

export default function CircularIndeterminate() {

    const [menuNumber, setMenuNumber] = useState<string>('');
    const [menuQuizzes] = useState<Array<any>>([{ title: 'Meus Quizzes', href: 'quizzes/meus-quizzes' }, { title: 'Todos os Quizzes', href: 'quizzes/todos-quizzes' }]);
    const [menuMissions] = useState<Array<any>>([{ title: 'Minhas Missões', href: 'missoes/minhas-missoes' }, { title: 'Todas as Missões', href: 'missoes/todas-missoes' }]);
    const [menuMiniGames] = useState<Array<any>>([{ title: 'Jogo da Memória', href: 'minigames/memoria' }]);
    const [menuStore] = useState<Array<any>>([{ title: 'Todos os Itens', href: 'loja-virtual' }, { title: 'Obra dos Alunos', href: 'loja-virtual/alunos' }]);

    const menu = (value: string) => {
        setMenuNumber(value);
    }

    return (
        <GridComponent spacing={0}>
            <ListPages title="pessoas" onClick={() => menu('')} href="/usuarios" image={users} />
            <ListPages title="quizzes" value={menuNumber} onClick={() => menu('quizzes')} arraySubMenu={menuQuizzes} image={quizzes} />
            <ListPages title="missões" value={menuNumber} onClick={() => menu('missões')} arraySubMenu={menuMissions} image={award} />

            <ListPages title="mini games" value={menuNumber} onClick={() => menu('mini games')} arraySubMenu={menuMiniGames} image={slack} />
            <ListPages title="loja virtual" value={menuNumber} onClick={() => menu('loja virtual')} arraySubMenu={menuStore} image={shoppingCart} />
            <ListPages title="mapa do jogo" href="/mapa-do-jogo" image={mapPin} onClick={() => menu('')} />
        </GridComponent>
    );
}
