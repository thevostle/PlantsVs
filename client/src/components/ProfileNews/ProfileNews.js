import './ProfileNews.scss';

const ProfileNews = () => (
    <div className="profileNews">
        <div className="profileNews__card">
            <div className="profileNews__userDataWrapper">
                <div className="profileNews__userPhoto"></div>
                <div className="profileNews__userTextContainer">
                    <div className="profileNews__userName">Аркадий</div>
                    <div className="profileNews__userStatus">Хлопец</div>
                </div>
            </div>
        </div>
        <div className="profileNews__cardContentImage"></div>
        <div className="profileNews__cardContentText"></div>
    </div>
);

export default ProfileNews;
