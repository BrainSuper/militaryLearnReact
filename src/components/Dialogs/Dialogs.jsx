import React from "react";
import classes from './Dialogs.module.css';
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import {sendMessageActionCreator, updateNewMessageBodyActionCreator} from "../../Redux/store";


const Dialogs = (props) => {
    const onChangeMessage = (e) => {
        props.dispatch(updateNewMessageBodyActionCreator(e.target.value));
    }
    const sendMessage = (e) => {
        e.preventDefault();
        props.dispatch(sendMessageActionCreator());
    }
    return (
        <div className={classes.dialogs}>
            <h1>Dialogs</h1>
            <div className={classes.dialogs__wrapper}>
                <div className={classes.dialogs__users}>
                    {props.dialogsPage.dialogsData.map(dialog => <Dialog name={dialog.name} id={dialog.id}/>)}
                </div>
                <div className={classes.dialogs__messages}>
                    {props.dialogsPage.messageData.map(m => <Message message={m.message}/>)}
                </div>
            </div>
            <textarea className={classes.dialogs__send} onChange={onChangeMessage} value={props.dialogsPage.newMessage}></textarea>
            <button onClick={sendMessage}>Send message</button>

        </div>
    )
}
export default Dialogs;