import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Store from './Store.component';
import Register from './register/RegisterItem.component';

const Routes = () => {

    return (
        <Switch>
            <Route exact path="/loja-virtual" component={Store} />
            <Route exact path="/loja-virtual/alunos" component={() => <Store isPupils />} />
            <Route exact path="/loja-virtual/novo-item" component={Register} />
            <Route exact path="/loja-virtual/editar-item/:id" component={Register} />
        </Switch>
    );

}

export default Routes;