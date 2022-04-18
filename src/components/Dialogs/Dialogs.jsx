import React from "react";
import classes from './Dialogs.module.css';
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {Textarea} from "../../custom/formControl/formControls";

const maxLength100 = maxLengthCreator(100);

let SendMessageForm = ({handleSubmit}) => {
    return <form onSubmit={handleSubmit}>
        <Field className={classes.dialogs__send} validate={[required, maxLength100]} type='text' name='message' component={Textarea}></Field>
        <button>Send message</button>
    </form>
};

SendMessageForm = reduxForm({form: 'sendMessageForm'})(SendMessageForm);
const Dialogs = ({sendMessage, dialogsPage: {dialogsData, messageData}}) => {
    const onSendMessage = (formData) => {
        sendMessage(formData.message);
    }
    return (
        <div className={classes.dialogs}>
            <h1>Dialogs</h1>
            <div className={classes.dialogs__wrapper}>
                <div className={classes.dialogs__users}>
                    {dialogsData.map(dialog => <Dialog name={dialog.name} id={dialog.id}/>)}
                </div>
                <div className={classes.dialogs__messages}>
                    {messageData.map(m => <Message message={m.message}/>)}
                </div>
            </div>
            <SendMessageForm onSubmit={onSendMessage} />

        </div>
    )
}
export default Dialogs;