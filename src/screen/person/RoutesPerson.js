import React from "react";
import { Route, Switch } from "react-router-dom";
import Person from "./Person.js";
import RegisterPerson from "./RegisterPerson.js";
import PersonInformation from "./PersonInformation.js";

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/pessoas" component={Person} />
            <Route exact path="/pessoas/criar-usuario" component={RegisterPerson} />
            <Route exact path="/pessoas/informacao/:id" component={PersonInformation} />
        </Switch>
    );
};

export default Routes;
