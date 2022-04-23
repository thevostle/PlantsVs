import './ProfileNews.scss';

import img from '../../views/registrationPage/signup.png'; // todo - убрать

const ProfileNews = () => (
    <div className="profileNews">
        <div className="profileNews__card">
            <div className="profileNews__userDataWrapper">
                <div className="profileNews__userPhotoWrapper">
                    <img className="profileNews__userPhoto" src={img} />
                </div>
                <div className="profileNews__userTextContainer">
                    <div className="profileNews__userName">Аркадий</div>
                    <div className="profileNews__userStatus">Хлопец</div>
                </div>
            </div>
        </div>
        <div className="profileNews__cardContentImageWrapper">
            
        </div>
        <div className="profileNews__cardContentText"></div>
    </div>
);

export default ProfileNews;
