import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

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

            ],
            newMessage: ''
        }
    },
    dispatch(action) {
        profileReducer(this.state.profilePage, action);
        dialogsReducer(this.state.dialogsPage, action);
        console.log(this.state);
        this.rerenderEntireTree();
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

export default store;

