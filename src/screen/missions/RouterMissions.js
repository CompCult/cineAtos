import React from "react";
import { Route, Switch } from "react-router-dom";
import MyMissions from "./myMission/MyMissions.js";
import AllMissions from "./allMission/AllMissions.js";
import CreateMission from "./myMission/CreateMission.js";
import MissionsInformation from "./componentsMission/MissionInformation";
import SeeAnswer from "./componentsMission/SeeAnswer.js";

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/missoes/minhas-missoes" component={MyMissions} />
            <Route exact path="/missoes/todas-missoes" component={AllMissions} />
            <Route exact path="/missoes/criar-missoes" component={CreateMission} />
            <Route exact path="/missoes/minhas-missoes/:id" render={props => <MissionsInformation {...props} isMyMission={true} />}
            />
            <Route exact path="/missoes/todas-missoes/:id" render={props => <MissionsInformation {...props} isMyMission={false} />} />
            <Route exact path="/missoes/minhas-missoes/:idMission/resposta/:idSeeAnswer" render={props => <SeeAnswer {...props} isMyMission={true} />} />
            <Route exact path="/missoes/todas-missoes/:idMission/resposta/:idSeeAnswer" render={props => <SeeAnswer {...props} isMyMission={false} />} />
        </Switch>
    );
};

export default Routes;
