import React from "react";
import {sendMessageActionCreator, updateNewMessageBodyActionCreator} from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";


const DialogsContainer = (props) => {
    const changeMessage = (message) => {
        props.store.dispatch(updateNewMessageBodyActionCreator(message));
    }
    const sendMessage = () => {
        props.store.dispatch(sendMessageActionCreator());
    }
    return <Dialogs dialogsPage={props.store.getState().dialogsPage} sendMessage={sendMessage} changeMessage={changeMessage} />
}
export default DialogsContainer;