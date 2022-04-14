import {followUnfollowAPI, usersAPI} from "../api/api";

const FOLLOW = 'FOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';
const TOGGLE_IS_FOLLOWING_IN_PROGRESS = 'TOGGLE_IS_FOLLOWING_IN_PROGRESS';

const initialState = {
    users: [],
    currentPage: 1,
    totalUsersCount: null,
    pagesCount: 10,
    isFetching: false,
    toggleFollowingInProgress: []



}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId && action.boolean === true) {
                        return {...user, followed: true};
                    }
                         else if (user.id === action.userId && action.boolean === false) {
                            return {...user, followed: false};
                        }

                    return user;
                })
            };
        case SET_USERS:
            return {
                ...state,
                users: action.users
            };
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            };
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.totalUsersCount
            };
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.toggleBoolean
            };
        case TOGGLE_IS_FOLLOWING_IN_PROGRESS:
            return {
                ...state,
                toggleFollowingInProgress: action.isFetching
                    ? [...state.toggleFollowingInProgress, action.id]
                    : state.toggleFollowingInProgress.filter(id => id != action.id)

            };
        default:
            return state;
    }
}
export const followSucces = (userId, boolean) => ({type: FOLLOW, userId, boolean});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount});
export const toggleIsFetching = (toggleBoolean) => ({type: TOGGLE_IS_FETCHING, toggleBoolean});
export const toggleIsFollowingInProgress = (id, isFetching) => ({type: TOGGLE_IS_FOLLOWING_IN_PROGRESS, id, isFetching});

export const requestUsers = (currentPage) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));
        usersAPI.getUsers(currentPage).then(response => {
            dispatch(toggleIsFetching(false));
            dispatch(setUsers(response.items));
            dispatch(setTotalUsersCount(response.totalCount));
        })
    }
}
export const follow = (userId, boolean, ajaxType) => {
    return (dispatch) => {
        dispatch(toggleIsFollowingInProgress(userId, true));
        followUnfollowAPI(userId, ajaxType).then(response => {
            if (response.resultCode === 0) {
                dispatch(followSucces(userId, boolean));
            }
            dispatch(toggleIsFollowingInProgress(userId, false))
        })
    }
}
export default usersReducer;

