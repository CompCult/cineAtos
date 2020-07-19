import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import MyChoices from "./myChoices/MyChoices.js";
import AllChoices from "./allChoices/AllChoices.js";
import CreateChoices from "./myChoices/CreateChoices.js";
import ChoiceInformation from "./componentsChoice/ChoicesInformation";
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
            <Route exact path="/quiz/todos-quizes" component={AllChoices} />
            <Route exact path="/quiz/todos-quizes/:id" render={props => <ChoiceInformation {...props} isMyChoice={false} />} />
            <PrivateRoute exact path="/quiz/meus-quizes" component={MyChoices} />
            <Route exact path="/quiz/meus-quizes/criar-quiz" component={CreateChoices} />
            <Route exact path="/quiz/meus-quizes/:id" render={props => <ChoiceInformation {...props} isMyChoice={true} />} />
        </Switch>
    );
};

export default Routes;
