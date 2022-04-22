import React from 'react';
import RegistrationComponent from '../registrationComponent';
import '../../style/pages/registrationPage.scss';

class RegistrationPage extends React.Component {
    render() {
        return (
        <div className='registrationPage'>
            <div className='registrationPage__column registrationPage__column_left'>
                <RegistrationComponent />
            </div>
            <div className="registrationPage__column registrationPage__column_right">
                <img src="./registrationPhoto.png"></img>
            </div>
        </div>);
    }
}

export default RegistrationPage;
