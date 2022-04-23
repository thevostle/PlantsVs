import React from 'react';
import './registrationPage.scss';
import img from './signup.png';

const RegistrationPage = ({ handleSignUp }) => (
    <div className="registrationPage">
        <div className="registrationPage__column registrationPage__column_left">
            <div className="registrationPage__registrationWrapper">
                <h1 className="registrationPage__title">Регистрация</h1>
                <form action='62.84.122.64/api/register' method='post'>
                    <p className="registrationPage__description">Имя пользователя</p>
                    <input
                        type="text"
                        className="registrationPage__input"
                        placeholder="Имя пользователя"
                        name="username"
                    />
                    <p className="registrationPage__description">Адрес электронной почты</p>
                    <input
                        type="email"
                        className="registrationPage__input"
                        placeholder="Адрес электронной почты"
                        name="email"
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
                    />
                    <div className="registrationPage__checkboxWrapper">
                        <input
                            type="checkbox"
                            name="remember"
                            className="registrationPage__checkbox"
                        />
                        <p className="registrationPage__description registrationPage__description_checkbox">
                            Запомнить меня
                        </p>
                    </div>
                    <button
                        type="submit"
                        onClick={(e) => {
                            e.preventDefault();
                            handleSignUp(document.querySelector('input[name="username"]').value);
                        }}
                        className="registrationPage__button"
                    >
                        Зарегистрироваться
                    </button>
                </form>
            </div>
        </div>
        <div className="registrationPage__column registrationPage__column_right">
            <img src={img} />
        </div>
    </div>
);

export default RegistrationPage;
