import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import RegistrationPage from '../views/registrationPage/registrationPage';

import './App.scss';

function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route exact path="/">
                        <RegistrationPage />
                    </Route>
                    <Route path="/:username"></Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
