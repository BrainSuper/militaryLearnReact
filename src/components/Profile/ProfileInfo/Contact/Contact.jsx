import React from "react";
import classes from './../ProfileInfo.module.css';
const Contact = (props) => {
    return <div>
        <b>{props.contact}: </b>{props.contacts[props.contact]};
    </div>

}
export default Contact;