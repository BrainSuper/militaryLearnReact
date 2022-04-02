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
                    <Dialog name={dialogsData[0].name} id={dialogsData[0].id}/>
                    <Dialog name={dialogsData[1].name} id={dialogsData[1].id}/>
                    <Dialog name={dialogsData[2].name} id={dialogsData[2].id}/>
                    <Dialog name={dialogsData[3].name} id={dialogsData[3].id}/>
                    <Dialog name={dialogsData[4].name} id={dialogsData[4].id}/>
                </div>
                <div className={classes.dialogs__messages}>
                    <Message message={messageData[0].message}/>
                    <Message message={messageData[1].message}/>
                    <Message message={messageData[2].message}/>
                    <Message message={messageData[3].message}/>
                    <Message message={messageData[4].message}/>
                </div>
            </div>

        </div>
    )
}
export default Dialogs;