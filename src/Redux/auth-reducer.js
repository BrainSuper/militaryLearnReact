const SET_USER_PROFILE = 'SET_USER_PROFILE';
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

export default authReducer;

