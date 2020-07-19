import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
/*
import Events from "../screen/events/Events.js";
import EventRequests from "../screen/events/EventRequests.js";
import CreateEvents from "../screen/events/CreateEvents.js";
import ChoiceInformation from "../screen/choices/componentsChoice/ChoicesInformation";
*/
import { getIsGestor, getIsPermissaoProfessor } from "../services/Auth";
import Welcome from '../Welcome';
import RouterPerson from '../screen/person/RoutesPerson';
import RouterMissions from '../screen/missions/RouterMissions';
import RouterChoices from '../screen/choices/RouterChoices';
import RouterMiniGames from '../screen/miniGames/RouterMiniGames';
import RouterStore from '../screen/store/RouterStore';
import RouterGameMap from '../screen/gameMap/RouterGameMap';

const PrivateRouteGestor = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      getIsGestor() ? (
        <Component {...props} />
      ) : (
          <Redirect to={{ pathname: "/", state: { from: props.location } }} />
        )
    }
  />
);

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      (getIsGestor() || getIsPermissaoProfessor()) ? (
        <Component {...props} />
      ) : (
          <Redirect to={{ pathname: "/", state: { from: props.location } }} />
        )
    }
  />
);

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={() => <Welcome />} />
      <Route path="/quiz" component={RouterChoices} />
      <Route path="/missoes" component={RouterMissions} />
      <Route path="/loja-virtual" component={RouterStore} />
      <PrivateRoute path="/miniGames" component={RouterMiniGames} />
      <PrivateRouteGestor path="/pessoas" component={RouterPerson} />
      <Route path="/mapa-do-jogo" component={RouterGameMap} />
    </Switch>
  );
};

export default Routes;
