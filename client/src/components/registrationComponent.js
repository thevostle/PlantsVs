import React from 'react';
import '../style/components/registrationComponent.scss';

class RegistrationComponent extends React.Component {
    render() {
        return (
        <div className='registrationComponent'>
            <div className="registrationComponent__registrationWrapper">
                <h1 className="registrationComponent__title">Регистрация</h1>
                <form>
                    <p className="registrationComponent__label">Имя пользователя</p>
                    <input type="text" className="registrationComponent__input" placeholder="Имя пользователя"></input>
                    <p className="registrationComponent__label">Адрес электронной почты</p>
                    <input type="text" className="registrationComponent__input" placeholder="Адрес электронной почты"></input>
                    <div className="registrationComponent__labelContainer">
                        <p className="registrationComponent__label">Пароль</p>
                        <p className="registrationComponent__forgotPassword">Забыли пароль?</p>
                    </div>
                    <input type="text" className="registrationComponent__input" placeholder="Пароль"></input>
                    <div className="registrationComponent__checkboxWrapper">
                        <input type="checkbox" className="registrationComponent__checkbox"></input>
                        <p className="registrationComponent__label registrationComponent__label_checkbox">Запомнить меня</p>
                    </div>
                    <button className="registrationComponent__button">Зарегистрироваться</button>
                </form>
            </div>
        </div>);
    }
}

export default RegistrationComponent;