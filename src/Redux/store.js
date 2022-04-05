const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let store = {
    state: {
        profilePage: {
            postData: [
                {id: 1, message: 'First post'},
                {id: 2, message: 'Second post'}
            ],
            newPost: ''
        },
        dialogsPage: {
            dialogsData: [
                {id: 1, name: 'Evgeniy'},
                {id: 2, name: 'Lilia'},
                {id: 3, name: 'Vova'},
                {id: 4, name: 'Dmitry'},
                {id: 5, name: 'Sasha'}

            ],
            messageData: [
                {id: 1, message: 'Hey'},
                {id: 2, message: 'How are you?'},
                {id: 3, message: 'What are you doing?'},
                {id: 4, message: 'Can you help me?'},
                {id: 5, message: 'I read that.'}

            ]
        }
    },
    dispatch(action) {
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: this.state.profilePage.postData.length + 1,
                message: this.state.profilePage.newPost
            }

            this.state.profilePage.postData.push(newPost);
            this.state.profilePage.newPost = '';
            this.rerenderEntireTree();
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this.state.profilePage.newPost = action.newPostText;
            this.rerenderEntireTree();
        }
    },
    subscribe(observer) {
        this.rerenderEntireTree = observer;
    },
    getState() {
        return this.state;
    },
    rerenderEntireTree() {
        console.log("You are not subscribe");
    }
}

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newPostText: text});
export default store;

