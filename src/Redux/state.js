let rerenderEntireTree;
const state = {
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
}
export let addPost = () => {
    let newPost = {
        id: state.profilePage.postData.length + 1,
        message: state.profilePage.newPost
    }
    state.profilePage.postData.push(newPost);
    state.profilePage.newPost = '';
    rerenderEntireTree();
}
export const updateNewPostText = (newPostText) => {
    state.profilePage.newPost = newPostText;
    rerenderEntireTree();
}
 export default state;

export const subscribe = (observer) => {
    rerenderEntireTree = observer;
}