import React, { useState, useEffect, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import RegistrationPage from '../views/registrationPage/registrationPage';
import ProfilePage from '../views/ProfilePage/ProfilePage';
import NotFound from '../views/NotFound/NotFound';
import PlantsCatalog from '../views/PlantsCatalog/PlantsCatalog';
import Header from '../components/Header/Header';

import { auth, checkAuth } from '../utils/network';
import { deleteCookie, getCookie, setCookie } from '../utils/cookie';

import './App.scss';
import { getUser } from '../utils/network';

function App() {
    const [userId, setUserId] = useState('');

    useEffect(() => {
        checkAuth().then((res) => {
            if (res.status === 'Authorized') {
                setUserId(getCookie('user_id'));
            } else {
                console.log('Unauthorized');
            }
        });
    }, []);

    const handleSignUp = (payload, isLogin, isRemember) => {
        console.log(`isRemember: ${isRemember}`);
        let action;

        if (isLogin) {
            payload = {
                username: payload['username'],
                password: payload['password'],
            };
            action = 'login';
        } else {
            action = 'registrate';
        }

        console.log(`payload:`);
        console.log(payload);

        auth(payload, action).then((res) => {
            console.log(`response:`);
            console.log(res);
            checkAuth().then((res) => {
                console.log(`auth status: ${res.status}`);
                return;
            });
            setCookie('user_id', res.user_id, isRemember);
            setCookie('password', res.password, isRemember);
            setUserId(res.user_id);
        });
    };

    const handleLogout = () => {
        deleteCookie('user_id');
        deleteCookie('password');
        setUserId('');
        window.location.assign('/');
    };

    // пуш уведомления
    function notifyMe() {
        var notification = new Notification('Не забыли об огороде?', {
            tag: 'ache-mail',
            body: 'И не надо.',
            icon: 'http://genshintool.com/wp-content/uploads/2021/08/genshin-impact-guide-how-to-obtain-and-use-whopperflower-easily.jpg',
        });
    }

    function notifSet() {
        if (!('Notification' in window)) alert('Ваш браузер не поддерживает уведомления.');
        else if (Notification.permission === 'granted') setTimeout(notifyMe, 2000);
        else if (Notification.permission !== 'denied') {
            Notification.requestPermission(function (permission) {
                if (permission === 'granted') setTimeout(notifyMe, 2000);
            });
        }
    }

    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route exact path="/">
                        {userId ? (
                            <Redirect to={`/user/${userId}`} replace />
                        ) : (
                            <RegistrationPage handleSignUp={handleSignUp} />
                        )}
                    </Route>
                    <Fragment>
                        <Header handleLogout={handleLogout} notifSet={notifSet} userId={userId} />
                        <Switch>
                            <Route path="/catalog">
                                <PlantsCatalog />
                            </Route>
                            <Route path="/user/:userId">
                                <ProfilePage />
                            </Route>
                            <Route exact path="/NotFound">
                                <NotFound />
                            </Route>
                        </Switch>
                    </Fragment>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
