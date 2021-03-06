import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { IStore } from 'types';

const ProtectedRoute = ({component: Component, ...rest}: any) => {
    const isAuth = useSelector((state: IStore) => state.auth.isAuth);
    return (
        <Route
            {...rest}
            render={(props) =>
                isAuth ? <Component {...props} /> : <Redirect to="/login" />
            }
        />
    );
}

export default ProtectedRoute;
