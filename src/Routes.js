import React from 'react'
import { Route, Switch, Redirect} from 'react-router-dom'
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

const Routes = () => {
    return (
        <Switch>
            <Route exact path = '/login' component = {() => <Login/>}/>
            <Route  path = '/1' component = {() => <h1>rota 1</h1>}/>
            <Route path = '/2' component = {() => <h1>rota 2</h1>}/>
        </Switch>
    )
}

export default Routes;