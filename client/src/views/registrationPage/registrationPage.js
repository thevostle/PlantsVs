import React from 'react';
import { useState } from 'react';
import './registrationPage.scss';
import '../../style/style.scss';
import img from './signup.png';

const RegistrationPage = ({ handleSignUp }) => {
    const [isLogin, setIsLogin] = useState(false);
    const [isRemember, setIsRemember] = useState(false);
    const [authData, setAuthData] = useState({
        username: '',
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        const [name, value] = [e.currentTarget.name, e.currentTarget.value];
        setAuthData((prev) => ({ ...prev, [name]: value }));
    };

    const switchIsLogin = () => {
        setIsLogin((prev) => !prev);
    };

    const switchIsRemember = () => {
        setIsRemember((prev) => !prev);
    };

    return (
        <div className="registrationPage">
            <div className="registrationPage__column registrationPage__column_left">
                <div className="registrationPage__registrationWrapper">
                    <h1 className="registrationPage__title">{isLogin ? 'Вход' : 'Регистрация'}</h1>
                    <span>{isLogin ? 'У меня нет акка.' : 'У меня уже есть акк.'}</span>
                    <span style={{ color: 'blue' }} onClick={switchIsLogin}>
                        {isLogin ? 'Зарегаться' : 'Войти'}
                    </span>
                    <form>
                        <p className="registrationPage__description">Имя пользователя</p>
                        <input
                            type="text"
                            className="registrationPage__input"
                            placeholder="Имя пользователя"
                            name="username"
                            value={authData['username']}
                            onChange={handleChange}
                        />
                        <p
                            className={`registrationPage__description ${
                                isLogin ? 'hideOnDesktop' : ''
                            }`}
                        >
                            Адрес электронной почты
                        </p>
                        <input
                            type="email"
                            className={`registrationPage__input ${isLogin ? 'hideOnDesktop' : ''}`}
                            placeholder="Адрес электронной почты"
                            name="email"
                            value={authData['email']}
                            onChange={handleChange}
                        />
                        <div className="registrationPage__descriptionContainer">
                            <p className="registrationPage__description">Пароль</p>
                            <p className="registrationPage__forgotPassword">Забыли пароль?</p>
                        </div>
                        <input
                            type="password"
                            className="registrationPage__input"
                            name="password"
                            placeholder="Пароль"
                            value={authData['password']}
                            onChange={handleChange}
                        />
                        <div className="registrationPage__checkboxWrapper">
                            <input
                                type="checkbox"
                                name="remember"
                                className="registrationPage__checkbox"
                                checked={isRemember}
                                onChange={switchIsRemember}
                            />
                            <p className="registrationPage__description registrationPage__description_checkbox">
                                Запомнить меня
                            </p>
                        </div>
                        <button
                            type="submit"
                            onClick={(e) => {
                                e.preventDefault();
                                handleSignUp(authData, isLogin, isRemember);
                            }}
                            className="registrationPage__button"
                        >
                            {isLogin ? 'Войти' : 'Зарегистрироваться'}
                        </button>
                    </form>
                </div>
            </div>
            <div className="registrationPage__column registrationPage__column_right">
                <img src={img} />
            </div>
        </div>
    );
};

export default RegistrationPage;
