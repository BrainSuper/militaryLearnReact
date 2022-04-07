const FOLLOW = 'FOLLOW';
const SET_USERS = 'SET-USERS';

const initialState = {
    users: []
        // {
        //         id: 1,
        //         photoURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/User_font_awesome.svg/2048px-User_font_awesome.svg.png',
        //         fololowed: true,
        //         name: 'Boris',
        //         status: 'Created new text message',
        //         city: 'Rivne',
        //         country: 'Ukraine'
        //     },
        //     {
        //         id: 2,
        //         photoURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/User_font_awesome.svg/2048px-User_font_awesome.svg.png',
        //         fololowed: true,
        //         name: 'Niko',
        //         status: 'Created new text message2',
        //         city: 'Kyiv',
        //         country: 'Ukraine'
        //     },
        //     {
        //         id: 3,
        //         photoURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/User_font_awesome.svg/2048px-User_font_awesome.svg.png',
        //         fololowed: true,
        //         name: 'Evgeniy',
        //         status: 'Created new text message3',
        //         city: 'Ternopil',
        //         country: 'Ukraine'
        //     },
        //     {
        //         id: 4,
        //         photoURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/User_font_awesome.svg/2048px-User_font_awesome.svg.png',
        //         fololowed: true,
        //         name: 'Dmitry',
        //         status: 'Created new text message4',
        //         city: 'Lviv',
        //         country: 'Ukraine'
        //     },
        //     {
        //         id: 5,
        //         photoURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/User_font_awesome.svg/2048px-User_font_awesome.svg.png',
        //         fololowed: true,
        //         name: 'Sasha',
        //         status: 'Created new text message5',
        //         city: 'Odessa',
        //         country: 'Ukraine'
        //     },

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
            }

        case SET_USERS:
            return {
                ...state,
                users: [...action.users]
            }
        default:
            return state;
    }
}
export const followAC = (userId, boolean) => ({type: FOLLOW, userId, boolean})
export const setUsersAC = (users) => ({type: SET_USERS, users})

export default usersReducer;

