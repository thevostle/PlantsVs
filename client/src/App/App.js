import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';

import RegistrationPage from '../views/registrationPage/registrationPage';
import ProfilePage from '../views/ProfilePage/ProfilePage';
import Header from '../components/Header/Header';

import './App.scss';

function App() {
    const [username, setUsername] = useState('');

    useEffect(() => {
        //document.cookie.split('; ').find((row) => row.startsWith('token=')).split('=')[1];
    }, []);

    const handleSignUp = (data) => {
        // console.log(username, email, password);
        console.log(data);
        const path =
            data['action'] == 'registration'
                ? 'http://62.84.122.64/api/register'
                : 'http://62.84.122.64/api/login';
        const payload = {
            username: data['username'],
            password: data['password'],
            email: data['email'],
        };

        register(payload, path).then((res) => {
            console.log(res);
            document.cookie = `token=${res.user_id}`;
            setUsername(res.user_id);
        });

        setUsername(username);
    };

    const register = async (payload, path) => {
        try {
            const response = await fetch(path, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });
            if (response.ok) {
                return response.json();
            }
        } catch (error) {
            console.log(error);
        }
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
