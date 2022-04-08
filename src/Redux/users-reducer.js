const FOLLOW = 'FOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';

const initialState = {
    users: [],
    currentPage: 1,
    totalUsersCount: null,
    pagesCount: 10,
    isFetching: false


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
            }
        default:
            return state;
    }
}
export const follow = (userId, boolean) => ({type: FOLLOW, userId, boolean});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount});
export const toggleIsFetching = (toggleBoolean) => ({type: TOGGLE_IS_FETCHING, toggleBoolean});

export default usersReducer;

