import React from 'react';
import { useParams } from 'react-router-dom';

import ProfileBio from '../../components/ProfileBio/ProfileBio';
import ProfileNews from '../../components/ProfileNews/ProfileNews';
import ProfileStoriesContainer from '../../components/ProfileStories/ProfileStoriesContainer';

import './ProfilePage.scss';

const ProfilePage = () => {
    const { username } = useParams();
    return (
        <div className="profilePage">
            {username}
            <div className="profilePage__collumn profilePage__collumn_left">
                <ProfileBio />
            </div>
            <div className="profilePage__collumn">
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
                
            </div>
        </div>
    );
};

export default ProfilePage;
