import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Missions from './Missions.component';
import Register from './register/RegisterMissions.component';
import View from './view/ViewMIssions.component';
import MissionResponse from './missionResponse/MissionResponse.component';
import { authentication } from '../../core/auth/Authentication';

const Routes = () => {

    return (
        <Switch>
            <Route exact path="/missoes/minhas-missoes" component={Missions} />
            {authentication() && <Route exact path="/missoes/minhas-missoes/nova-missao" component={Register} />}
            {authentication() && <Route exact path="/missoes/minhas-missoes/editar-missao/:id" component={Register} />}
            <Route exact path="/missoes/minhas-missoes/visualizar-missao/:id" component={View} />
            <Route exact path="/missoes/todas-missoes/visualizar-missao/:id" component={() => <View allMissions />} />
            <Route exact path="/missoes/todas-missoes" component={() => <Missions allMissions />} />

            <Route exact path="/missoes/minhas-missoes/visualizar-missao/:id/resposta/:secondaryId" component={MissionResponse} />

            <Route exact path="/missoes/todas-missoes/visualizar-missao/:id/resposta/:secondaryId" component={() => <MissionResponse allMissions />} />
        </Switch>
    );

}

export default Routes;