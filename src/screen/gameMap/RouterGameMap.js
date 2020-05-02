import React from "react";
import { Route, Switch } from "react-router-dom";
import GameMap from './GameMap';

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/mapa-do-jogo" component={GameMap} />
        </Switch>
    );
};

export default Routes;