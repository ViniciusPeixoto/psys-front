// import { getCookie } from './csrf'
import Cookies from 'js-cookie'
const apiUri = "http://localhost:8000"

function getCookie(name) {
    return Cookies.get(name)
}

export const listAccounts = async () => {
    const endpoint = apiUri+"/accounts/"

    try {
        const response = await fetch(
            endpoint,
            {
                method: "GET",
                credentials: 'include'
            }
        )
        const data = await response.json();
        return data
    } catch (error) {
        console.error("Error fetching data from API: ", error);
        throw error;
    }
}

export const addAccount = async (accountData) => {
    const endpoint = apiUri+"/accounts/"
    const csrfToken = getCookie('csrftoken')

    try {
        const response = await fetch(
            endpoint,
            {
                method: "POST",
                body: JSON.stringify(accountData),
                headers: {
                    'X-CSRFToken': csrfToken,
                    'Content-Type': 'application/json'
                },
                credentials: 'include'
            }
        )
        const data = await response.json();
        return data
    } catch (error) {
        console.error("Error fetching data from API: ", error);
        throw error;
    }
}

export const getAccount = async (accountId) => {
    const endpoint = apiUri+`/accounts/${accountId}/`

    try {
        const response = await fetch(
            endpoint,
            {
                method: "GET",
                credentials: 'include'
            }
        )
        const data = await response.json();
        return data
    } catch (error) {
        console.error("Error fetching data from API: ", error);
        throw error;
    }
}

export const patchAccount = async (accountId, accountData) => {
    const endpoint = apiUri+`/accounts/${accountId}/`
    const csrfToken = getCookie('csrftoken')

    try {
        const response = await fetch(
            endpoint,
            {
                method: "PATCH",
                body: JSON.stringify(accountData),
                headers: {
                    'X-CSRFToken': csrfToken,
                    'Content-Type': 'application/json'
                },
                credentials: 'include'
            }
        )
        const data = await response.json();
        return data
    } catch (error) {
        console.error("Error fetching data from API: ", error);
        throw error;
    }
}

export const deleteAccount = async (accountId) => {
    const endpoint = apiUri+`/accounts/${accountId}/`
    const csrfToken = getCookie('csrftoken')

    try {
        const response = await fetch(
            endpoint,
            {
                method: "DELETE",
                headers: {
                    'X-CSRFToken': csrfToken
                },
                credentials: 'include'
            }
        )
        const data = await response.json();
        return data
    } catch (error) {
        console.error("Error fetching data from API: ", error);
        throw error;
    }
}

export const listTrees = async () => {
    const endpoint = apiUri+"/trees/"

    try {
        const response = await fetch(
            endpoint,
            {
                method: "GET",
                credentials: 'include'
            }
        )
        const data = await response.json();
        return data
    } catch (error) {
        console.error("Error fetching data from API: ", error);
        throw error;
    }
}

export const addTree = async (treeData) => {
    const endpoint = apiUri+"/trees/"
    const csrfToken = getCookie('csrftoken')

    try {
        const response = await fetch(
            endpoint,
            {
                method: "POST",
                body: JSON.stringify(treeData),
                headers: {
                    'X-CSRFToken': csrfToken,
                    'Content-Type': 'application/json'
                },
                credentials: 'include'
            }
        )
        const data = await response.json();
        return data
    } catch (error) {
        console.error("Error fetching data from API: ", error);
        throw error;
    }
}

export const getTree = async (treeId) => {
    const endpoint = apiUri+`/trees/${treeId}/`

    try {
        const response = await fetch(
            endpoint,
            {
                method: "GET",
                credentials: 'include'
            }
        )
        const data = await response.json();
        return data
    } catch (error) {
        console.error("Error fetching data from API: ", error);
        throw error;
    }
}

export const patchTree = async (treeId, treeData) => {
    const endpoint = apiUri+`/trees/${treeId}/`
    const csrfToken = getCookie('csrftoken')

    try {
        const response = await fetch(
            endpoint,
            {
                method: "PATCH",
                body: JSON.stringify(treeData),
                headers: {
                    'X-CSRFToken': csrfToken,
                    'Content-Type': 'application/json'
                },
                credentials: 'include'
            }
        )
        const data = await response.json();
        return data
    } catch (error) {
        console.error("Error fetching data from API: ", error);
        throw error;
    }
}

export const deleteTree = async (treeId) => {
    const endpoint = apiUri+`/trees/${treeId}/`
    const csrfToken = getCookie('csrftoken')

    try {
        const response = await fetch(
            endpoint,
            {
                method: "DELETE",
                headers: {
                    'X-CSRFToken': csrfToken
                },
                credentials: 'include'
            }
        )
        const data = await response.json();
        return data
    } catch (error) {
        console.error("Error fetching data from API: ", error);
        throw error;
    }
}

export const listUsers = async () => {
    const endpoint = apiUri+"/users/"

    try {
        const response = await fetch(
            endpoint,
            {
                method: "GET",
                credentials: 'include'
            }
        )
        const data = await response.json();
        return data
    } catch (error) {
        console.error("Error fetching data from API: ", error);
        throw error;
    }
}

export const listUserPlanted = async (userId) => {
    const endpoint = apiUri+`/users/${userId}/planted/`

    try {
        const response = await fetch(
            endpoint,
            {
                method: "GET",
                credentials: 'include'
            }
        )
        const data = await response.json();
        return data
    } catch (error) {
        console.error("Error fetching data from API: ", error);
        throw error;
    }
}

export const addPlanted = async (plantedData) => {
    const endpoint = apiUri+"/planted/"
    const csrfToken = getCookie('csrftoken')

    try {
        const response = await fetch(
            endpoint,
            {
                method: "POST",
                body: JSON.stringify(plantedData),
                headers: {
                    'X-CSRFToken': csrfToken,
                    'Content-Type': 'application/json'
                },
                credentials: 'include'
            }
        )
        const data = await response.json();
        return data
    } catch (error) {
        console.error("Error fetching data from API: ", error);
        throw error;
    }
}

export const getPlanted = async (plantedId) => {
    const endpoint = apiUri+`/planted/${plantedId}/`

    try {
        const response = await fetch(
            endpoint,
            {
                method: "GET",
                credentials: 'include'
            }
        )
        const data = await response.json();
        return data
    } catch (error) {
        console.error("Error fetching data from API: ", error);
        throw error;
    }
}

export const patchPlanted = async (plantedId, plantedData) => {
    const endpoint = apiUri+`/planted/${plantedId}/`
    const csrfToken = getCookie('csrftoken')

    try {
        const response = await fetch(
            endpoint,
            {
                method: "PATCH",
                body: JSON.stringify(plantedData),
                headers: {
                    'X-CSRFToken': csrfToken,
                    'Content-Type': 'application/json'
                },
                credentials: 'include'
            }
        )
        const data = await response.json();
        return data
    } catch (error) {
        console.error("Error fetching data from API: ", error);
        throw error;
    }
}

export const deletePlanted = async (plantedId) => {
    const endpoint = apiUri+`/planted/${plantedId}/`
    const csrfToken = getCookie('csrftoken')

    try {
        const response = await fetch(
            endpoint,
            {
                method: "DELETE",
                headers: {
                    'X-CSRFToken': csrfToken
                },
                credentials: 'include'
            }
        )
        const data = await response.json();
        return data
    } catch (error) {
        console.error("Error fetching data from API: ", error);
        throw error;
    }
}

export const listPlantedAccount = async () => {
    const endpoint = apiUri+"/planted/account/"

    try {
        const response = await fetch(
            endpoint,
            {
                method: "GET",
                credentials: 'include'
            }
        )
        const data = await response.json();
        return data
    } catch (error) {
        console.error("Error fetching data from API: ", error);
        throw error;
    }
}

export const listPlantedOwn = async () => {
    const endpoint = apiUri+"/planted/own/"

    try {
        const response = await fetch(
            endpoint,
            {
                method: "GET",
                credentials: 'include'
            }
        )
        const data = await response.json();
        return data
    } catch (error) {
        console.error("Error fetching data from API: ", error);
        throw error;
    }
}

export const addProfile = async (profileData) => {
    const endpoint = apiUri+"/profiles/"
    const csrfToken = getCookie('csrftoken')

    try {
        const response = await fetch(
            endpoint,
            {
                method: "POST",
                body: JSON.stringify(profileData),
                headers: {
                    'X-CSRFToken': csrfToken,
                    'Content-Type': 'application/json'
                },
                credentials: 'include'
            }
        )
        const data = await response.json();
        return data
    } catch (error) {
        console.error("Error fetching data from API: ", error);
        throw error;
    }
}

export const getProfile = async (profileId) => {
    const endpoint = apiUri+`/profiles/${profileId}/`

    try {
        const response = await fetch(
            endpoint,
            {
                method: "GET",
                credentials: 'include'
            }
        )
        const data = await response.json();
        return data
    } catch (error) {
        console.error("Error fetching data from API: ", error);
        throw error;
    }
}

export const patchProfile = async (profileId, profileData) => {
    const endpoint = apiUri+`/profiles/${profileId}/`
    const csrfToken = getCookie('csrftoken')

    try {
        const response = await fetch(
            endpoint,
            {
                method: "PATCH",
                body: JSON.stringify(profileData),
                headers: {
                    'X-CSRFToken': csrfToken,
                    'Content-Type': 'application/json'
                },
                credentials: 'include'
            }
        )
        const data = await response.json();
        return data
    } catch (error) {
        console.error("Error fetching data from API: ", error);
        throw error;
    }
}

export const getLogin = async (userCredentials) => {
    const endpoint = apiUri+"/login/"
    const csrfToken = getCookie('csrftoken')

    try {
        const response = await fetch(endpoint,
            {
                method: "POST",
                body: `username=${userCredentials.username}&password=${userCredentials.password}&next=/`,
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'X-CSRFToken': csrfToken
                },
                credentials: 'include'
            }
        )
        return response
    } catch (error) {
        console.error("Error fetching data from API: ", error);
        throw error;
    }
}

export const getLogout = async () => {
    const endpoint = apiUri+"/login/logout"
    const csrfToken = getCookie('csrftoken')

    try {
        const response = await fetch(endpoint,
            {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRFToken': csrfToken
                },
                credentials: 'include'
            }
        )
        return response
    } catch (error) {
        console.error("Error fetching data from API: ", error);
        throw error;
    }
}

export const getCurrentUser = async () => {
    const endpoint = apiUri+"/login/"

    try {
        const response = await fetch(
            endpoint,
            {
                method: "GET",
                credentials: 'include'
            }
        )
        return response
    } catch (error) {
        console.error("Error fetching data from API: ", error);
        throw error;
    }
}
