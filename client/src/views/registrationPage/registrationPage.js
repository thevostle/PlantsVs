import React from 'react';
import './registrationPage.scss';
import img from './signup.png';

const RegistrationPage = () => (
    <div className="registrationPage">
        <div className="registrationPage__column registrationPage__column_left">
            <div className="registrationPage__registrationWrapper">
                <h1 className="registrationPage__title">Регистрация</h1>
                <form>
                    <p className="registrationPage__description">Имя пользователя</p>
                    <input
                        type="text"
                        className="registrationPage__input"
                        placeholder="Имя пользователя"
                    />
                    <p className="registrationPage__description">Адрес электронной почты</p>
                    <input
                        type="text"
                        className="registrationPage__input"
                        placeholder="Адрес электронной почты"
                    />
                    <div className="registrationPage__descriptionContainer">
                        <p className="registrationPage__description">Пароль</p>
                        <p className="registrationPage__forgotPassword">Забыли пароль?</p>
                    </div>
                    <input type="text" className="registrationPage__input" placeholder="Пароль" />
                    <div className="registrationPage__checkboxWrapper">
                        <input type="checkbox" className="registrationPage__checkbox" />
                        <p className="registrationPage__description registrationPage__description_checkbox">
                            Запомнить меня
                        </p>
                    </div>
                    <button className="registrationPage__button">Зарегистрироваться</button>
                </form>
            </div>
        </div>
        <div className="registrationPage__column registrationPage__column_right">
            <img src={img} />
        </div>
    </div>
);

export default RegistrationPage;
