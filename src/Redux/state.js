const state = {
    profilePage: {
        postData: [
            {id: 1, message: 'First post'},
            {id: 2, message: 'Second post'}
        ]
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
export let addPost = (newPostText) => {
    debugger;
    let newPost = {
        id: state.profilePage.postData.length + 1,
        message: newPostText
    }
    state.profilePage.postData.push(newPost);
}
 export default state;