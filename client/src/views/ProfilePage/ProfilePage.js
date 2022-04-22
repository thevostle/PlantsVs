import React from 'react';
import { useParams } from 'react-router-dom';

import ProfileBio from '../../components/ProfileBio/ProfileBio';
import ProfileNews from '../../components/ProfileNews/ProfileNews';

import './ProfilePage.scss';

const ProfilePage = () => {
    const { username } = useParams();
    return (
        <div className="profilePage">
            {username}
            <ProfileBio />
            <ProfileNews />
        </div>
    );
};

export default ProfilePage;
