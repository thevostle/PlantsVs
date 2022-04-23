import React from 'react';
import { useParams } from 'react-router-dom';

import ProfileBio from '../../components/ProfileBio/ProfileBio';
import ProfileNews from '../../components/ProfileNews/ProfileNews';
import ProfileStoriesContainer from '../../components/ProfileStories/ProfileStoriesContainer';
import ProfileData from '../../components/ProfileData/ProfileData'
import ProfileNotifications from '../../components/ProfileNotifications/ProfileNotifications'

import './ProfilePage.scss';

const ProfilePage = () => {
    const { username } = useParams();
    return (
        <div className="profilePage">
            <div className="profilePage__collumn profilePage__collumn_left">
                {username}
                <ProfileBio />
            </div>
            <div className="profilePage__collumn profilePage__collumn_center">
                <ProfileStoriesContainer />
                <ProfileNews />
                <ProfileNews />
                <ProfileNews />
                <ProfileNews />
                <ProfileNews />
                <ProfileNews />
                <ProfileNews />
                <ProfileNews />
                <ProfileNews />
                <ProfileNews />
                <ProfileNews />
                <ProfileNews />
            </div>
            <div className="profilePage__collumn">
                <div className="profilePage__collumnContainer">
                    <ProfileData />
                    <ProfileNotifications />
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
