import React from 'react';
import LoginPage from './Pages/Login'

import {HashRouter, Switch, Route, Redirect} from 'react-router-dom';
export default () => {
    return (
        <div>
            <HashRouter >
                <Switch>
                    <Route path="/" render={() => <Redirect to='/login'/>} />
                    <Route path="/login" component={LoginPage} />
                </Switch>
            </HashRouter>
        </div>
    );
};
