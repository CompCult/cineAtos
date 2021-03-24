import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Quizzes from './Quizzes.component';
import Register from './register/RegisterQuizzes.component';
import View from './view/ViewQuizzes.component';
import { authentication } from '../../core/auth/Authentication';

const Routes = () => {

    return (
        <Switch>
            <Route exact path="/quizzes/meus-quizzes" component={Quizzes} />
            {authentication() && <Route exact path="/quizzes/meus-quizzes/novo-quiz" component={Register} />}
            {authentication() && <Route exact path="/quizzes/meus-quizzes/editar-quiz/:id" component={Register} />}
            <Route exact path="/quizzes/meus-quizzes/visualizar-quiz/:id" component={View} />
            <Route exact path="/quizzes/todos-quizzes/visualizar-quiz/:id" component={View} />
            <Route exact path="/quizzes/todos-quizzes" component={() => <Quizzes allQuizzes />} />
        </Switch>
    );

}

export default Routes;