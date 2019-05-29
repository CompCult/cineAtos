import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Login from './screen/login/Login'
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
        <Route exact path={match.path} render={() => <h1>rota escolhas</h1>}/>
        <Route path={`${match.path}/respostas-das-escolhas`} render={() => <h1>rota respostas das escolhas</h1>}/>
    </div>
  );
}

const TopicsMissoes = ({ match }) => {
  return (
    <div>
        <Route exact path={match.path} render={() => <h1>rota missões</h1>}/>
        <Route path={`${match.path}/respostas-das-missoes`} render={() => <h1>rota respostas das missões</h1>}/>
        <Route path={`${match.path}/propostas`} render={() => <h1>rota propostas das missões</h1>}/>
    </div>
  );
}

const TopicsMissoesAgenda = ({ match }) => {
  return (
    <div>
        <Route exact path={match.path} render={() => <h1>rota eventos</h1>}/>
        <Route path={`${match.path}/pedidos-de-eventos`} render={() => <h1>rota pedidos de eventos</h1>}/>
    </div>
  );
}

const Routes = () => {
    return (
        <Switch>
            <Route exact path = '/login' component = {() => <Login/>}/>
            <Route  path = '/pessoas' component = {() => <h1>rota pessoas</h1>}/>
            <Route path = '/escolhas' component = {TopicsEscolhas}/>
            <Route path = '/missoes' component = {TopicsMissoes}/>
            <Route path = '/eventos' component = {TopicsMissoesAgenda}/>
            <Route path = '/paineis' component = {() => <h1>rota paineis</h1>}/>
        </Switch>
    )
}

export default Routes;