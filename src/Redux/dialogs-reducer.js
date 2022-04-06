const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';

const dialogsReducer = (state, action) => {
    debugger;
    switch (action.type) {
        case SEND_MESSAGE:
            const newMessage = {
                id: state.messageData.length + 1,
                message: state.newMessage
            }
            state.newMessage = '';
            state.messageData.push(newMessage);
            return state;
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessage = action.newMessage;
            return state;
        default:
            return state;
    }
}

export const sendMessageActionCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyActionCreator = (newMessageBody) => ({type: UPDATE_NEW_MESSAGE_BODY, newMessage: newMessageBody})
export default dialogsReducer;

