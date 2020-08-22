import constants from "../Constants/network";
import axios from "../axios";

export const userServices = {
    logout,
    getPending
}

function logout() {
    const requestOptions = {
        method: 'GET',
    };
    return fetch(`${constants.baseURL}/auth/logout`, requestOptions)
    .then(handleResponse)
    .then(data => {
        console.log("Donatto,  ", data)
        return data;
    });
}

function getPending() {
    return axios.get('/grants/allpending').then(response => {
                console.log('getpost', response);
                if (response.data.status === 200) {
                    return response.data.data;
                } else {
                    return null
                }
            }).catch(err => {
                console.log(err);
            })
}


function handleResponse(response) {
    return response.text().then(text => {
        const result = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
                // location.reload(true);
            }

            const error = (result && result.errors[0].message) || response.statusText;
            return Promise.reject(error);
        }

        return result.data;
    });
}