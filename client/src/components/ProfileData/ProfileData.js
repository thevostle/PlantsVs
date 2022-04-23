import React from 'react';
import './ProfileData.scss';

const ProfileData = () => (
    <div className="profileData">
        <div className="profileData__calendar">
            <div className="profileData__calendarMonthYear">Апрель 2022</div>
            <div className="profileData__calendarWrapper">
                <div className="profileData__calendarDay_actie">
                    <div className="profileData__calendarDayData">Пт</div>
                    <div className="profileData__calendarDayData">22</div>
                    <div className="profileData__calendarDayPoints"></div>
                </div>
                <div className="profileData__calendarDay">
                    <div className="profileData__calendarDayData">Сб</div>
                    <div className="profileData__calendarDayData">23</div>
                    <div className="profileData__calendarDayPoints"></div>
                </div>
                <div className="profileData__calendarDay">
                    <div className="profileData__calendarDayData">Вс</div>
                    <div className="profileData__calendarDayData">24</div>
                    <div className="profileData__calendarDayPoints"></div>
                </div>
                <div className="profileData__calendarDay">
                    <div className="profileData__calendarDayData">Пн</div>
                    <div className="profileData__calendarDayData">25</div>
                    <div className="profileData__calendarDayPoints"></div>
                </div>
                <div className="profileData__calendarDay">
                    <div className="profileData__calendarDayData">Вт</div>
                    <div className="profileData__calendarDayData">26</div>
                    <div className="profileData__calendarDayPoints"></div>
                </div>
                <div className="profileData__calendarDay">
                    <div className="profileData__calendarDayData">Ср</div>
                    <div className="profileData__calendarDayData">27</div>
                    <div className="profileData__calendarDayPoints"></div>
                </div>
                <div className="profileData__calendarDay">
                    <div className="profileData__calendarDayData">Чт</div>
                    <div className="profileData__calendarDayData">28</div>
                    <div className="profileData__calendarDayPoints"></div>
                </div>
            </div>
            <div className="profileData__line"></div>
            <div className="profileData__timetableWrapper">
                <div className="profileData__timetableTitle">Расписание</div>
                <div className="profileData__timetableTask">
                    <div className="profileData__timetableTitleDateWrapper">
                        <div className="profileData__timetableTitleDate">Пт</div>
                        <div className="profileData__timetableTitleDate">22</div>
                    </div>
                    <div className="profileData__timetableTaskMain">
                        <div className="profileData__timetableTaskMainLine"></div>
                        <div className="profileData__timetableTaskMainTitle">Кактус</div>
                        <div className="profileData__timetableTaskMainProgress">Выполнено 9 из 11</div>
                    </div>
                </div>
                <div className="profileData__timetableTask">
                    <div className="profileData__timetableTitleDateWrapper">
                        <div className="profileData__timetableTitleDate">Пт</div>
                        <div className="profileData__timetableTitleDate">22</div>
                    </div>
                    <div className="profileData__timetableTaskMain">
                        <div className="profileData__timetableTaskMainLine"></div>
                        <div className="profileData__timetableTaskMainTitle">Кактус</div>
                        <div className="profileData__timetableTaskMainProgress">Выполнено 9 из 11</div>
                    </div>
                </div>
                <div className="profileData__timetableTask">
                    <div className="profileData__timetableTitleDateWrapper">
                        <div className="profileData__timetableTitleDate">Пт</div>
                        <div className="profileData__timetableTitleDate">22</div>
                    </div>
                    <div className="profileData__timetableTaskMain">
                        <div className="profileData__timetableTaskMainLine"></div>
                        <div className="profileData__timetableTaskMainTitle">Кактус</div>
                        <div className="profileData__timetableTaskMainProgress">Выполнено 9 из 11</div>
                    </div>
                </div>
            </div>
        </div>
        <button className="profileBio__buttonStart">
            <div className="profileBio__buttonStartText">Начать заботиться</div>
        </button>
    </div>
);

export default ProfileData;
