const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';

const initialState = {
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

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            const newMessage = {
                id: state.messageData.length + 1,
                message: state.newMessage
            }
            return {
                ...state,
                messageData: [...state.messageData, newMessage],
                newMessage: ''
            };

        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessage: action.newMessage
            }
        default:
            return state;
    }
}

export const sendMessageActionCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyActionCreator = (newMessageBody) => ({
    type: UPDATE_NEW_MESSAGE_BODY,
    newMessage: newMessageBody
})
export default dialogsReducer;

