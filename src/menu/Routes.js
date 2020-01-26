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
import ChoiceInformation from "../screen/choices/componentsChoice/ChoicesInformation";
import MissionsInformation from "../screen/missions/componentsMission/MissionInformation";
import SeeAnswer from "../screen/missions/componentsMission/SeeAnswer.js";
import Memories from '../screen/miniGames/memories/Memories';
import Hangmans from '../screen/miniGames/hangmans/Hangmans';
import CreateMemories from '../screen/miniGames/memories/CreateMemories';
import CreateHangmans from '../screen/miniGames/hangmans/CreateHangmans';
import MemoriesInformation from '../screen/miniGames/memories/MemoriesInformation';
import InformationHangmans from '../screen/miniGames/hangmans/InformationHangmans';
import { getIsGestor } from "../services/Auth";

const TopicsPerson = ({ match }) => {
  return (
    <div>
      <Route exact path={match.path} render={() => <Person />} />
      <Route
        exact
        path={`${match.path}/criar-usuario`}
        render={() => <RegisterPerson />}
      />
      <Route
        exact
        path={`${match.path}/informacao/:id`}
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
        render={props => <ChoiceInformation {...props} isMyChoice={true} />}
      />
      <Route
        exact
        path={`${match.path}/todos-quizes/:id`}
        render={props => <ChoiceInformation {...props} isMyChoice={false} />}
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
        render={props => <MissionsInformation {...props} isMyMission={true} />}
      />
      <Route
        exact
        path={`${match.path}/todas-missoes/:id`}
        render={props => <MissionsInformation {...props} isMyMission={false} />}
      />
      <Route
        exact
        path={`${match.path}/minhas-missoes/:idMission/resposta/:idSeeAnswer`}
        render={props => <SeeAnswer {...props} isMyMission={true} />}
      />
      <Route
        exact
        path={`${match.path}/todas-missoes/:idMission/resposta/:idSeeAnswer`}
        render={props => <SeeAnswer {...props} isMyMission={false} />}
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


const TopicsMiniGames = ({ match }) => {
  return (
    <div>
      <Route exact path={`${match.path}/menoria`} render={() => <Memories />} />
      <Route exact path={`${match.path}/forca`} render={() => <Hangmans />} />
      <Route exact path={`${match.path}/criar-menoria`} render={() => <CreateMemories />} />
      <Route exact path={`${match.path}/criar-forca`} render={() => <CreateHangmans />} />
      <Route exact path={`${match.path}/informacao-menoria/:id`}
        render={props => <MemoriesInformation {...props} />} />
      <Route exact path={`${match.path}/informacao-forca/:id`}
        render={props => <InformationHangmans {...props} />} />
    </div>
  );
};
const Routes = () => {
  return (
    <Switch>
      {getIsGestor() === 'true' && <Route path="/pessoas" component={TopicsPerson} />}
      <Route path="/quiz" component={TopicsChoices} />
      <Route path="/missoes" component={TopicsMissions} />
      <Route path="/eventos" component={TopicsEvents} />
      {getIsGestor() !== 'null' && <Route path="/miniGames" component={TopicsMiniGames} />}
    </Switch>
  );
};

export default Routes;
