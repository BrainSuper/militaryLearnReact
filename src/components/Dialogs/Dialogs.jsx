import React from "react";
import classes from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const Dialog = (props) => {
    return <div className={classes.user}><NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink></div>
}

const Message = (props) => {
    return <div className={classes.message}>{props.message}</div>
}
const dialogsData = [
    {id: 1, name: 'Evgeniy'},
    {id: 2, name: 'Lilia'},
    {id: 3, name: 'Vova'},
    {id: 4, name: 'Dmitry'},
    {id: 5, name: 'Sasha'}

]
const messageData = [
    {id: 1, message: 'Hey'},
    {id: 2, message: 'How are you?'},
    {id: 3, message: 'What are you doing?'},
    {id: 4, message: 'Can you help me?'},
    {id: 5, message: 'I read that.'}

]
const Dialogs = (props) => {
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

        </div>
    )
}
export default Dialogs;