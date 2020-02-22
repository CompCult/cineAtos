import React from "react";
import { Route, Switch } from "react-router-dom";
import Events from "../screen/events/Events.js";
import EventRequests from "../screen/events/EventRequests.js";
import CreateEvents from "../screen/events/CreateEvents.js";
import ChoiceInformation from "../screen/choices/componentsChoice/ChoicesInformation";
import { getIsGestor } from "../services/Auth";
import Welcome from '../Welcome';
import RouterPerson from '../screen/person/RoutesPerson';
import RouterMissions from '../screen/missions/RouterMissions';
import RouterChoices from '../screen/choices/RouterChoices';
import RouterMiniGames from '../screen/miniGames/RouterMiniGames';

const TopicsEvents = ({ match }) => {
  return (
    <div>
      <Route exact path={match.path} render={() => <Events />} />
      <Route
        exact
        path={`${match.path}/criar-eventos`}
        render={() => <CreateEvents />}
      />
      <Route
        exact
        path={`${match.path}/pedidos-de-eventos`}
        render={() => <EventRequests />}
      />
      <Route
        exact
        path={`${match.path}/trackId=:id`}
        render={props => <ChoiceInformation {...props} />}
      />
      <Route
        exact
        path={`${match.path}/pedidos-de-eventos/trackId=:id`}
        render={props => <ChoiceInformation {...props} />}
      />
    </div>
  );
};

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={() => <Welcome />} />
      <Route path="/quiz" component={RouterChoices} />
      <Route path="/missoes" component={RouterMissions} />
      { /*<Route path="/eventos" component={TopicsEvents} />*/}
      {getIsGestor() && (
        <>
          <Route path="/miniGames" component={RouterMiniGames} />
          <Route path="/pessoas" component={RouterPerson} />
        </>
      )}
    </Switch>
  );
};

export default Routes;
