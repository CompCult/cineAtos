import React from 'react';
import { Route, Switch } from 'react-router-dom';
import User from './User.component';
import Register from './register/RegisterUser.component';
import { authentication } from '../../core/auth/Authentication';

const Routes = () => {

    return (
        <Switch>
            <Route exact path="/usuarios" component={User} />
            {authentication() && <Route exact path="/usuarios/novo-usuario" component={Register} />}
            {authentication() && <Route exact path="/usuarios/editar-usuario/:id" component={Register} />}
        </Switch>
    );

}

export default Routes;