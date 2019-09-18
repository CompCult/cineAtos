import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Login from './screen/login/Login'
import Person from './screen/person/Person.js'
import Choices from './screen/choices/Choices.js'
import ChoicesOfAnswers from './screen/choices/ChoicesOfAnswers.js'
import Missions from './screen/missions/Missions.js'
import MissionResponses from './screen/missions/MissionResponses.js'
import MissionProposals from './screen/missions/Proposals.js'
import Events from './screen/events/Events.js'
import EventRequests from './screen/events/EventRequests.js'
import RegisterPerson from './screen/person/RegisterPerson.js'
import CreateMission from './screen/missions/CreateMission.js'
import CreateEvents from './screen/events/CreateEvents.js'
import CreateChoices from './screen/choices/CreateChoices.js'
import Panels from './screen/panels/Panels.js'
import PersonInformation from './screen/person/PersonInformation.js'
import ChoiceInformation from './screen/choices/ChoiceInformation.js'
import ChoicesOfAnswersInformation from './screen/choices/ChoicesOfAnswersInformation.js'

/*
const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        Auth.getAuthenticate() ? (
          <Component {...props} /> // vim para menu aqui
        ) : (
          <Redirect to={{ pathname: "/", state: { from: props.location } }} />
        )
      }
    />
  )
*/

const TopicsPerson = ({ match }) => {

  return (
    <div>
      <Route exact path={match.path} render={() => <Person />} />
      <Route exact path={`${match.path}/register`} render={() => <RegisterPerson />} />
      <Route exact path={`${match.path}/trackId=:id`} render={(props) => <PersonInformation {...props} />} />
    </div>
  );
}

const TopicsChoices = ({ match }) => {
  return (
    <div>
      <Route exact path={match.path} render={() => <Choices />} />
      <Route exact path={`${match.path}/criar-quiz`} render={() => <CreateChoices />} />
      <Route exact path={`${match.path}/respostas-das-escolhas`} render={() => <ChoicesOfAnswers />} />
      <Route exact path={`${match.path}/trackId=:id`} render={(props) => <ChoiceInformation {...props} />} />
      <Route exact path={`${match.path}/respostas-das-escolhas/trackId=:id`} render={(props) => <ChoicesOfAnswersInformation {...props} />} />
    </div>
  );
}

const TopicsMissions = ({ match }) => {
  return (
    <div>
      <Route exact path={match.path} render={() => <Missions />} />
      <Route exact path={`${match.path}/propostas`} render={() => <MissionProposals />} />
      <Route exact path={`${match.path}/criar-missoes`} render={() => <CreateMission />} />
      <Route exact path={`${match.path}/respostas-das-missoes`} render={() => <MissionResponses />} />
      <Route exact path={`${match.path}/trackId=:id`} render={(props) => <ChoiceInformation {...props} />} />
      <Route exact path={`${match.path}/propostas/trackId=:id`} render={(props) => <ChoiceInformation {...props} />} />
      <Route exact path={`${match.path}/respostas-das-missoes/trackId=:id`} render={(props) => <ChoiceInformation {...props} />} />
    </div>
  );
}

const TopicsEvents = ({ match }) => {
  return (
    <div>
      <Route exact path={match.path} render={() => <Events />} />
      <Route exact path={`${match.path}/criar-eventos`} render={() => <CreateEvents />} />
      <Route exact path={`${match.path}/pedidos-de-eventos`} render={() => <EventRequests />} />
      <Route exact path={`${match.path}/trackId=:id`} render={(props) => <ChoiceInformation {...props} />} />
      <Route exact path={`${match.path}/pedidos-de-eventos/trackId=:id`} render={(props) => <ChoiceInformation {...props} />} />
    </div>
  );
}

const Routes = () => {
  return (
    <Switch>
      <Route exact path='/login' component={() => <Login />} />

      <Route path='/pessoas' component={TopicsPerson} />
      <Route path='/escolhas' component={TopicsChoices} />
      <Route path='/missoes' component={TopicsMissions} />
      <Route path='/eventos' component={TopicsEvents} />
      <Route path='/paineis' component={Panels} />
      <Route path='/feed' component={() => <h1>rota feed</h1>} />
      <Route path='/missoes1' component={() => <h1>rota missoes1</h1>} />
      <Route path='/escolhas1' component={() => <h1>rota escolhas1</h1>} />
    </Switch>
  )
}

export default Routes;