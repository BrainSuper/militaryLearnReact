import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";
const CHECK_AUTH = 'CHECK_AUTH';
const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
const INITIALIZING = 'INITIALIZING';
const GET_CAPTCHA = 'GET_CAPTCHA';

const initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    initialized: false,
    captcha: null
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHECK_AUTH:
            return {
                ...state,
                ...action.data,
                isAuth: true
            };
        case LOGOUT_SUCCESS:
            return {
                ...state,
                isAuth: false,
                userId: null,
                email: null,
                login: null

            };
        case INITIALIZING:
            return {
                ...state, initialized: true
            };
        case GET_CAPTCHA:
            return {
                ...state, captcha: action.captchaUrl
            }
        default:
            return state;
    }
}

export const checkAuth = (userId, email, login) => ({type: CHECK_AUTH, data: {userId, email, login}});
export const logoutSuccess = () => ({type: LOGOUT_SUCCESS});
export const initializingSuccess = () => ({type: INITIALIZING});
export const getCaptchaUrlSuccess = (captchaUrl) => ({type: GET_CAPTCHA, captchaUrl});

export const initializing = () => (dispatch) => {
    Promise.all([dispatch(getAuthUserData())]).then(() => {
        dispatch(initializingSuccess());
    })
}

export const getAuthUserData = () => (dispatch) => {
    return authAPI.checkAuth().then(response => {
        if (response.resultCode === 0) {
            const {id, email, login} = response.data;
            dispatch(checkAuth(id, email, login));
        }
    })
}

export const logout = () => async (dispatch) => {
     let response = await authAPI.logout();
        if (response.resultCode === 0) {
            dispatch(logoutSuccess());
        }
}
export const login = (login, password, rememberMe, captcha) => async (dispatch) => {
    let response = await authAPI.login(login, password, rememberMe, captcha);
        if (response.resultCode === 0) {
            authAPI.checkAuth().then(response => {
                if (response.resultCode === 0) {
                    const {id, email, login} = response.data;
                    dispatch(checkAuth(id, email, login));
                    dispatch(getCaptchaUrlSuccess(null));
                }
            })
        } else {
            if (response.resultCode === 10) {
                dispatch(getCaptchaUrl());
            }
            dispatch(stopSubmit('Login', {_error: response.messages.length > 0 ? response.messages[0] : 'some error'}))
        }
}
export const getCaptchaUrl = () => async (dispatch) => {
    const response = await authAPI.getCaptcha();
    dispatch(getCaptchaUrlSuccess(response.url));

}

export default authReducer;

