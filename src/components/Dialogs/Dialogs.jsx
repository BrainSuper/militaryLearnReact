import React from "react";
import classes from './Dialogs.module.css';
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";


const Dialogs = (props) => {
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
            <textarea className={classes.dialogs__send}></textarea>
            <button>Send message</button>

        </div>
    )
}
export default Dialogs;