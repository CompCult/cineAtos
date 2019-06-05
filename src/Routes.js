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

const TopicsEscolhas = ({ match }) => {
  return (
    <div>
        <Route exact path={match.path} render={() => <Choices/>}/>
        <Route path={`${match.path}/respostas-das-escolhas`} render={() => <ChoicesOfAnswers/>}/>
    </div>
  );
}

const TopicsMissoes = ({ match }) => {
  return (
    <div>
        <Route exact path={match.path} render={() => <Missions/>}/>
        <Route path={`${match.path}/respostas-das-missoes`} render={() => <MissionResponses/>}/>
        <Route path={`${match.path}/propostas`} render={() => <MissionProposals/>}/>
    </div>
  );
}

const TopicsMissoesAgenda = ({ match }) => {
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
            <Route  path = '/pessoas' component = {() => <Person/>}/>
            <Route path = '/escolhas' component = {TopicsEscolhas}/>
            <Route path = '/missoes' component = {TopicsMissoes}/>
            <Route path = '/eventos' component = {TopicsMissoesAgenda}/>
            <Route path = '/paineis' component = {() => <h1>rota paineis</h1>}/>
        </Switch>
    )
}

export default Routes;