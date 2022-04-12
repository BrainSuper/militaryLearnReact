import {authAPI} from "../api/api";
const CHECK_AUTH = 'CHECK_AUTH';

const initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHECK_AUTH:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default:
            return state;
    }
}

export const checkAuth = (userId, email, login) => ({type: CHECK_AUTH, data: {userId, email, login}});

export const getAuthUserData = () => (dispatch) => {
    authAPI.checkAuth().then(response => {
        if (response.resultCode === 0) {
            const {id, email, login} = response.data;
            dispatch(checkAuth(id, email, login));
        }
    })
}
export const login = (login, password, rememberMe) => (dispatch) => {
    authAPI.login(login, password, rememberMe).then(response => {
        if (response.resultCode === 0) {
            authAPI.checkAuth().then(response => {
                if (response.resultCode === 0) {
                    const {id, email, login} = response.data;
                    dispatch(checkAuth(id, email, login));
                }
            })
        }
    })
}

export default authReducer;

