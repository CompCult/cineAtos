import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { isAuthenticated } from '../core/auth/auth';

const PrivateRoute = ({ component: Component, ...rest }: any) => (
    <Route
        {...rest}
        render={props =>
            isAuthenticated() ? (
                <Component {...props} />
            ) : (
                    <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
                )
        }
    />
);

export default PrivateRoute;