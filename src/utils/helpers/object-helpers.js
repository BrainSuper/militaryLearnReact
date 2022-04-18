export const followHelper = (users, action, actionBool ) => {
   users.map(user => {
        if (user.id === action.userId && action.boolean === actionBool) {
            return {
                ...user, followed: actionBool
            }}
             else if (user.id === action.userId && action.boolean === !actionBool) {
                return {...user, followed: !actionBool};
            }
            return user;
    })
}
