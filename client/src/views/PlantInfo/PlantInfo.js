import React from 'react';
import './ProfileData.scss';

const PlantInfo = () => (
    <div className="plantInfo">
        <div className="Header">
            <div className="Header__logo">

            </div>
            <div className="Header__links">
                <div className="Header__link">Мои детишки</div>
                <div className="Header__link">Каталог</div>
                <div className="Header__link">Прогресс</div>
                <div className="Header__link">Блог</div>
            </div>
            <div className="Header__search"></div>
        </div>
        <div className="plantInfoMain">
            <div className="plantInfoMain__media">
                <div className="plantInfoMain__mediaImg">
                    <img></img>
                </div>
                <div className="plantInfoMain__mediaCare">
                    <div className="plantInfoMain__mediaCare">
                        <div className="plantInfoMain__mediaCareTitle">Условия содержания</div>
                        <div className="plantInfoMain__mediaCareButtons">
                            <div className="plantInfoMain__mediaCareButtonLeft">

                            </div>
                            <div className="plantInfoMain__mediaCareButtonRigh">

                            </div>
                        </div>
                    </div>
                    <div className="plantInfoMain__mediaCardsConteyner">
                        <div className="plantInfoMain__mediaCard">
                            <div className="plantInfoMain__mediaCardHeader">
                                <div className="plantInfoMain__mediaCardTitle">Полив</div>
                                <div className="plantInfoMain__mediaCardImg">
                                    <img></img>
                                </div>
                            </div>
                            <div className="plantInfoMain__mediaCardText">25 литров с помощью волшебной лейки и лучшей родниковой воды</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="plantInfoMain__text">
                <div className="plantInfoMain__textTitle">Кактус побольше</div>
                <div className="plantInfoMain__textContainer">Ваши 4млн слов про это прекрасное растение, который никто чикто чиать не будетаааааааааааа ааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааа</div>
            </div>
        </div>
    </div>
);

export default PlantInfo;