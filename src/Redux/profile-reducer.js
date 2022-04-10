import {profileAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

const initialState = {
    postData: [
        {id: 1, message: 'First post'},
        {id: 2, message: 'Second post'}
    ],
    newPost: '',
    profile: null
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: state.postData.length + 1,
                message: state.newPost
            }
            return {
                ...state,
                postData: [...state.postData, newPost],
                newPost: ''
            }

        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPost: action.newPostText
            };
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newPostText: text});
export const setUserProfileSuccess = (profile) => ({type: SET_USER_PROFILE, profile});

export const setUserProfile = (userId) => {
    return (dispatch) => {
        profileAPI.setProfile(userId).then(response => {
            dispatch(setUserProfileSuccess(response));
        })
    }
}
export default profileReducer;

