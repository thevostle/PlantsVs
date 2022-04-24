import { getCookie } from './cookie';

const SERVER_IP = 'https://62.84.122.64/api';
// const SERVER_IP = 'http://62.84.122.64/api';

const auth = async (payload, action) => {
    try {
        const response = await fetch(`${SERVER_IP}/${action}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        });
        if (response.ok) {
            return response.json();
        }
    } catch (error) {
        console.log(error);
    }
};

const checkAuth = async () => {
    try {
        console.log(
            `${SERVER_IP}/auth?user_id=${getCookie('user_id')}&password=${getCookie('password')}`
        );
        const response = await fetch(
            `${SERVER_IP}/auth?user_id=${getCookie('user_id')}&password=${getCookie('password')}`,
            { method: 'GET' }
        );
        if (response.ok) {
            return response.json();
        }
    } catch (error) {
        console.log(error);
    }
};

const getUser = async (user_id) => {
    try {
        const response = await fetch(`${SERVER_IP}/user?user_id=${user_id}`, {
            method: 'GET',
        });
        if (response.ok) {
            return response.json();
        }
    } catch (error) {
        console.log(error);
    }
};

const getPlants = async () => {
    try {
        const response = await fetch(`${SERVER_IP}/plants`, {
            method: 'GET',
        });
        if (response.ok) {
            return response.json();
        }
    } catch (error) {
        console.log(error);
    }
};

export { auth, checkAuth, getUser, getPlants };
