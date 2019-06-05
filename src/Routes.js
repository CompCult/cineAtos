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
/*
const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        Auth.getAuthenticate() ? (
          <Component {...props} />
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
        <Route exact path={match.path} render={() => <Person/>}/>
        <Route path={`${match.path}/register`} render={() => <RegisterPerson/>}/>
    </div>
  );
}

const TopicsChoices = ({ match }) => {
  return (
    <div>
        <Route exact path={match.path} render={() => <Choices/>}/>
        <Route path={`${match.path}/respostas-das-escolhas`} render={() => <ChoicesOfAnswers/>}/>
    </div>
  );
}

const TopicsMissions = ({ match }) => {
  return (
    <div>
        <Route exact path={match.path} render={() => <Missions/>}/>
        <Route path={`${match.path}/respostas-das-missoes`} render={() => <MissionResponses/>}/>
        <Route path={`${match.path}/propostas`} render={() => <MissionProposals/>}/>
    </div>
  );
}

const TopicsEvents = ({ match }) => {
  return (
    <div>
        <Route exact path={match.path} render={() => <Events/>}/>
        <Route path={`${match.path}/pedidos-de-eventos`} render={() => <EventRequests/>}/>
    </div>
  );
}

const Routes = () => {
    return (
        <Switch>
            <Route exact path = '/login' component = {() => <Login/>}/>
            <Route  path = '/pessoas' component = {TopicsPerson}/>
            <Route path = '/escolhas' component = {TopicsChoices}/>
            <Route path = '/missoes' component = {TopicsMissions}/>
            <Route path = '/eventos' component = {TopicsEvents}/>
            <Route path = '/paineis' component = {() => <h1>rota paineis</h1>}/>
        </Switch>
    )
}

export default Routes;