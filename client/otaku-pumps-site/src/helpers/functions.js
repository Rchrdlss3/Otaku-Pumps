import { BACK_END_URL, HTTP_STATUS } from "./constants";
import { DARK_THEME, LIGHT_THEME } from "./themes";

export const getCurrentTheme = () => {
    let theme = {}
    let currentTheme = localStorage.getItem('THEME')
    switch (currentTheme) {
        case 'DARK_THEME': 
        theme = DARK_THEME
        localStorage.setItem('THEME','DARK_THEME')
        break;

        case 'LIGHT_THEME': 
        theme = LIGHT_THEME;
        localStorage.setItem('THEME','LIGHT_THEME');
        break;

        case null: 
        theme = LIGHT_THEME;
        localStorage.setItem('THEME','LIGHT_THEME');
        break;
    }
    return theme 
}

export const setCurrentTheme = (checked) => {
    if (checked) {
        localStorage.setItem('THEME','DARK_THEME')
        return DARK_THEME
    } else {
        localStorage.setItem('THEME','LIGHT_THEME')
        return LIGHT_THEME
    }
}

export const getParsedUA = () => {
        return fetch(`${BACK_END_URL}/get-device`)
        .then((res) => {return res.json()})
        .then((data) => {
                return data;
        })
}

export const registerUser = (registeredUser) => {

    return fetch(`${BACK_END_URL}/register-user`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(registeredUser)
    }).then(res => {if (res.status == 200) {
        return HTTP_STATUS.SUCCESS;
    } else {
        return HTTP_STATUS.FAILURE
    }})
}