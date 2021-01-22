import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MiniGames from './MiniGames.component';
import Register from './register/RegisterMiniGames.component';

const Routes = () => {

    return (
        <Switch>
            <Route exact path="/minigames/memoria" component={MiniGames} />
            <Route exact path="/minigames/novo-minigame-memoria" component={Register} />
            <Route exact path="/minigames/meus-MiniGames/informacao-memoria/:id" component={Register} />
        </Switch>
    );

}

export default Routes;