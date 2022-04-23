import React from 'react';
import './ProfileNotifications.scss';

const ProfileNotifications = () => (
    <div className='profileData'>
        <div className='profileData__calendar'>
            <div className="profileData__calendarMonthYear">Апрель 2022</div>
            <div className="profileData__calendarWrapper">
                <div className='profileData__calendarDay'>
                    <div className='profileData__calendarDayData'>Пт</div>
                    <div className='profileData__calendarDayData'>22</div>
                    <div className='profileData__calendarDayPoints_blue'></div>
                </div>
            </div>
        </div>
        <button className="profileBio__buttonStart">
            <div className="profileBio__buttonStartText">Начать заботиться</div>
        </button>
    </div>
);

export default ProfileNotifications;