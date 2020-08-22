import constants from "../Constants/network";

export const userServices = {
    logout
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