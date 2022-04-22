import ProfileStory from './ProfileStory';

import './ProfileStoriesContainer.scss';

const ProfileStoriesContainer = () => (
    <div className="profileStoriesContainer">
        <div className="profileStoriesContainer__title"></div>
        <div className="profileStoriesContainer__itemsContainer">
            // тут будут элементы-истории
            <ProfileStory />
        </div>
    </div>
);

export default ProfileStoriesContainer;