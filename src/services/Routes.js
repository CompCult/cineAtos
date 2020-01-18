import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Login from '../screen/login/Login'
import Menu from '../menu/NavigationMenu'
import { isAuthenticated } from "./Auth"

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
          <Redirect to={{ pathname: "/login", state: { from: props.location } }} />
        )
    }
  />
);

const Routes = () => {
  return (
    <Switch>
      <Route exact path='/login' component={() => <Login />} />
      <PrivateRoute path='/' component={() => <Menu />} />
    </Switch>
  )
}

export default Routes;

