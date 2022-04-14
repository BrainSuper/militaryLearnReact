import {createSelector} from "reselect";

const getUsersSelector = (state) => {
    return state.usersPage.users;
}
export const getUsers = createSelector(getUsersSelector, (users) => {
    return users.filter(u => true);
})
export const getCurrentPage = (state) => {
    return state.usersPage.currentPage;
}
export const getTotalUsersCount = (state) => {
    return state.usersPage.totalUsersCount;
}
export const getPagesCount = (state) => {
    return state.usersPage.pagesCount;
}
export const getIsFetching = (state) => {
    return state.usersPage.isFetching;
}
export const getToggleIsFetching = (state) => {
    return state.usersPage.toggleIsFetching;
}
export const getToggleFollowingInProgress = (state) => {
    return state.usersPage.toggleFollowingInProgress;
}
