import { React, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import ProfileBio from '../../components/ProfileBio/ProfileBio';
import ProfileNews from '../../components/ProfileNews/ProfileNews';
import ProfileStoriesContainer from '../../components/ProfileStories/ProfileStoriesContainer';
import ProfileData from '../../components/ProfileData/ProfileData';
import ProfileNotifications from '../../components/ProfileNotifications/ProfileNotifications';

import './ProfilePage.scss';
import { getUser } from '../../utils/network';

const ProfilePage = () => {
    const { userId } = useParams();
    const [username, setUsername] = useState('');

    useEffect(() => {
        getUser(userId).then((res) => {
            if (res.status === "Error#8: The user_id doesn't exist") {
                window.location.assign('/NotFound');
                return;
            }
            setUsername(res.username);
        });
    }, []);

    return (
        <div className="profilePage">
            <div className="profilePage__collumn profilePage__collumn_left">
                <ProfileBio userId={userId} username={username} />
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
