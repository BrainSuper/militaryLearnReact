const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const initialState = {
    postData: [
        {id: 1, message: 'First post'},
        {id: 2, message: 'Second post'}
    ],
    newPost: ''
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: state.postData.length + 1,
                message: state.newPost
            }
            state.postData.push(newPost);
            state.newPost = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPost = action.newPostText;
            return state;
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newPostText: text});

export default profileReducer;

