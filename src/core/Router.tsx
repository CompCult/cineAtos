import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Menu from '../container/Menu.component';
import PrivateRoute from './PrivateRoute';
import Login from '../container/login/Login.component';

const Routes = () => {

    return (
        <Switch>
            <Route exact path='/login' component={Login} />
            <PrivateRoute path='/' component={(() => <Menu />)} />
        </Switch>
    )
}

export default Routes;