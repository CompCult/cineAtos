import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import MyMissions from "./myMission/MyMissions.js";
import AllMissions from "./allMission/AllMissions.js";
import CreateMission from "./myMission/CreateMission.js";
import MissionsInformation from "./componentsMission/MissionInformation";
import SeeAnswer from "./componentsMission/SeeAnswer.js";
import { getIsGestor, getIsPermissaoProfessor } from "../../services/Auth";

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            (getIsGestor() || getIsPermissaoProfessor()) ? (
                <Component {...props} />
            ) : (
                    <Redirect to={{ pathname: "/", state: { from: props.location } }} />
                )
        }
    />
);

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/missoes/todas-missoes" component={AllMissions} />
            <Route exact path="/missoes/todas-missoes/:id" render={props => <MissionsInformation {...props} isMyMission={false} />} />
            <Route exact path="/missoes/todas-missoes/:idMission/resposta/:idSeeAnswer" render={props => <SeeAnswer {...props} isMyMission={false} />} />
            <PrivateRoute exact path="/missoes/criar-missoes" component={CreateMission} />
            <PrivateRoute exact path="/missoes/minhas-missoes" component={MyMissions} />
            <PrivateRoute exact path="/missoes/minhas-missoes/:id" render={props => <MissionsInformation {...props} isMyMission={true} />}
            />
            <PrivateRoute exact path="/missoes/minhas-missoes/:idMission/resposta/:idSeeAnswer" render={props => <SeeAnswer {...props} isMyMission={true} />} />
        </Switch>
    );
};

export default Routes;
