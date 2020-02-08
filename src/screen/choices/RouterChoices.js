import React from "react";
import { Route, Switch } from "react-router-dom";
import MyChoices from "./myChoices/MyChoices.js";
import AllChoices from "./allChoices/AllChoices.js";
import CreateChoices from "./myChoices/CreateChoices.js";
import ChoiceInformation from "./componentsChoice/ChoicesInformation";

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/quiz/meus-quizes" component={MyChoices} />
            <Route exact path="/quiz/todos-quizes" component={AllChoices} />
            <Route exact path="/quiz/criar-quiz" component={CreateChoices} />
            <Route exact path="/quiz/meus-quizes/:id" render={props => <ChoiceInformation {...props} isMyChoice={true} />} />
            <Route exact path="/quiz/todos-quizes/:id" render={props => <ChoiceInformation {...props} isMyChoice={false} />} />
        </Switch>
    );
};

export default Routes;
