import React from "react";
import { Route, Switch } from "react-router-dom";
import user from './person/User.container';
import { Menu } from '../component/Component';
import Missions from './missions/Missions.container';
import Quizzes from './quiz/Quizzes.container';
import MiniGames from './miniGames/MiniGames.container';
import GameMap from './gameMap/GameMap.component';
import Store from './store/Store.container';

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={() => <Menu.MenuPages />} />
            <Route path="/usuarios" component={user} />
            <Route path="/missoes/" component={Missions} />
            <Route path="/quizzes/" component={Quizzes} />
            <Route path="/minigames/" component={MiniGames} />
            <Route path="/mapa-do-jogo/" component={GameMap} />
            <Route path="/loja-virtual/" component={Store} />
        </Switch>
    );
};

export default Routes;