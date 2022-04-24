import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';
import imgLogo from './logo.png';

const Header = ({ handleLogout, userId }) => (
    <div>
        <div className="header">
            <div className="header__logo">
                <img src={imgLogo} />
            </div>
            <div className="header__links">
                <div className="header__link">
                    <Link to={`/user/${userId}`}>Мой профиль</Link>
                </div>
                <div className="header__link">Мои растения</div>
                <div className="header__link">
                    <Link to={'/catalog'}>Каталог</Link>
                </div>
                <div className="header__link">Прогресс</div>
                <div className="header__link">Блог</div>
            </div>
            <div className="header__search">Поиск</div>
            <div>
                <button onClick={handleLogout}>Выйти</button>
                <img />
            </div>
        </div>
    </div>
);

export default Header;
