import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

const Header = ({ handleLogout, userId }) => (
    <div>
        <div className="Header">
            <div className="Header__logo"></div>
            <div className="Header__links">
                <div className="Header__link">
                    <Link to={`/user/${userId}`}>Мой профиль</Link>
                </div>
                <div className="Header__link">Мои детишки</div>
                <div className="Header__link">
                    <Link to={'/catalog'}>Каталог</Link>
                </div>
                <div className="Header__link">Прогресс</div>
                <div className="Header__link">Блог</div>
            </div>
            <div className="Header__search"></div>
        </div>
        <div>
            <button onClick={handleLogout}>Выйти</button>
            <img />
        </div>
    </div>
);

export default Header;
