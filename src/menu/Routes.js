import React from "react";
import { Route, Switch } from "react-router-dom";
import Person from "../screen/person/Person.js";
import MyChoices from "../screen/choices/myChoices/MyChoices.js";
import AllChoices from "../screen/choices/allChoices/AllChoices.js";
import MyMissions from "../screen/missions/myMission/MyMissions.js";
import AllMissions from "../screen/missions/allMission/AllMissions.js";
import Events from "../screen/events/Events.js";
import EventRequests from "../screen/events/EventRequests.js";
import RegisterPerson from "../screen/person/RegisterPerson.js";
import CreateMission from "../screen/missions/myMission/CreateMission.js";
import CreateEvents from "../screen/events/CreateEvents.js";
import CreateChoices from "../screen/choices/myChoices/CreateChoices.js";
import PersonInformation from "../screen/person/PersonInformation.js";
import ChoiceInformation from "../screen/choices/myChoices/ChoiceInformation.js";
import MissionsInformation from "../screen/missions/myMission/MissionsInformation.js";
import AllChoiceInformation from "../screen/choices/allChoices/AllChoiceInformation.js";
import AllMissionsInformation from "../screen/missions/allMission/AllMissionsInformation.js";
import SeeAllAnswer from "../screen/missions/componentsMission/SeeAllAnswer.js";
import SeeMyAnswer from "../screen/missions/componentsMission/SeeMyAnswer.js";

const TopicsPerson = ({ match }) => {
  return (
    <div>
      <Route exact path={match.path} render={() => <Person />} />
      <Route
        exact
        path={`${match.path}/register`}
        render={() => <RegisterPerson />}
      />
      <Route
        exact
        path={`${match.path}/trackId=:id`}
        render={props => <PersonInformation {...props} />}
      />
    </div>
  );
};

const TopicsChoices = ({ match }) => {
  return (
    <div>
      <Route
        exact
        path={`${match.path}/meus-quizes`}
        render={() => <MyChoices />}
      />
      <Route
        exact
        path={`${match.path}/todos-quizes`}
        render={() => <AllChoices />}
      />
      <Route
        exact
        path={`${match.path}/criar-quiz`}
        render={() => <CreateChoices />}
      />
      <Route
        exact
        path={`${match.path}/meus-quizes/:id`}
        render={props => <ChoiceInformation {...props} />}
      />
      <Route
        exact
        path={`${match.path}/todos-quizes/:id`}
        render={props => <AllChoiceInformation {...props} />}
      />
    </div>
  );
};

const TopicsMissions = ({ match }) => {
  return (
    <div>
      <Route
        exact
        path={`${match.path}/minhas-missoes`}
        render={() => <MyMissions />}
      />
      <Route
        exact
        path={`${match.path}/todas-missoes`}
        render={() => <AllMissions />}
      />
      <Route
        exact
        path={`${match.path}/criar-missoes`}
        render={() => <CreateMission />}
      />
      <Route
        exact
        path={`${match.path}/minhas-missoes/:id`}
        render={props => <MissionsInformation {...props} />}
      />
      <Route
        exact
        path={`${match.path}/todas-missoes/:id`}
        render={props => <AllMissionsInformation {...props} />}
      />
      <Route
        exact
        path={`${match.path}/minhas-missoes/:idMission/resposta/:idSeeAnswer`}
        render={props => <SeeMyAnswer {...props} />}
      />
      <Route
        exact
        path={`${match.path}/todas-missoes/:idMission/resposta/:idSeeAnswer`}
        render={props => <SeeAllAnswer {...props} />}
      />
    </div>
  );
};

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
      <Route path="/pessoas" component={TopicsPerson} />
      <Route path="/quiz" component={TopicsChoices} />
      <Route path="/missoes" component={TopicsMissions} />
      <Route path="/eventos" component={TopicsEvents} />
    </Switch>
  );
};

export default Routes;
