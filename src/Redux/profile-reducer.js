import {profileAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const GET_STATUS_SUCCESS = 'GET_STATUS_SUCCESS';
const SET_STATUS_SUCCESS = 'SET_STATUS_SUCCESS';
const UPDATE_PHOTO_SUCCESS = 'UPDATE_PHOTO_SUCCESS';

const initialState = {
    postData: [
        {id: 1, message: 'First post'},
        {id: 2, message: 'Second post'}
    ],
    profile: null,
    status: 'Hello'
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: state.postData.length + 1,
                message: action.newPost
            }
            return {
                ...state,
                postData: [...state.postData, newPost],
            };
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            };
        case SET_STATUS_SUCCESS:
            return {
                ...state, status: action.status
            };
        case UPDATE_PHOTO_SUCCESS:
            return {
                ...state, profile: {...state.profile, photos: action.photos}
            }
        default:
            return state;
    }
}

export const addPostActionCreator = (newPost) => ({type: ADD_POST, newPost});
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newPostText: text});
export const setUserProfileSuccess = (profile) => ({type: SET_USER_PROFILE, profile});
export const getStatusSuccess = (userId) => ({type: GET_STATUS_SUCCESS, userId});
export const setStatusSuccess = (status) => ({type: SET_STATUS_SUCCESS, status});
export const updatePhotoSuccess = (photos) => ({type: UPDATE_PHOTO_SUCCESS, photos});

export const getStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId);
        dispatch(setStatusSuccess(response));
}
export const updateStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status);
        if (response.resultCode === 0) {
            dispatch(setStatusSuccess(status));
        }
}
export const updatePhoto = (photo) => async (dispatch) => {
    let response = await profileAPI.uploadPhoto(photo);
    if (response.resultCode === 0) {
        dispatch(updatePhotoSuccess(response.data.photos))
    }
}
export const updateProfile = (profile) => async (dispatch, getState) => {
    let response = await profileAPI.updateProfile(profile);
    if (response.resultCode === 0) {
        const id = getState().auth.userId;
        dispatch(setUserProfile(id));
    } else {
        debugger;
        dispatch(stopSubmit('profileUpdateForm', {"contacts": {'facebook': response.messages[0]}}))
        return Promise.reject(response.messages[0]);
    }
}
export const setUserProfile = (userId) => {
    return async (dispatch) => {
        let response = await profileAPI.setProfile(userId);
            dispatch(setUserProfileSuccess(response));
    }
}
export default profileReducer;

