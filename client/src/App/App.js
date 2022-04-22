import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';

import RegistrationPage from '../views/registrationPage/registrationPage';
import ProfilePage from '../views/ProfilePage/ProfilePage';
import Header from '../components/Header/Header';

import './App.scss';

function App() {
    const [username, setUsername] = useState('');

    useEffect(() => {}, []);

    const handleSignUp = (username) => {
        setUsername(username);
    };

    return (
        <div className="App">
            <Router>
                <Route exact path="/">
                    {username ? (
                        <Redirect to={`/${username}`} replace />
                    ) : (
                        <RegistrationPage handleSignUp={handleSignUp} />
                    )}
                </Route>
                <Route path="/*">
                    <Header />
                </Route>
                <Route path="/:username">
                    <ProfilePage />
                </Route>
            </Router>
        </div>
    );
}

export default App;
