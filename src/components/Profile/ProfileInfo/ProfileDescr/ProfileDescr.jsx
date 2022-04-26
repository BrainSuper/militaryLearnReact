import React from "react";
import classes from './../ProfileInfo.module.css';
import Contact from "./../Contact/Contact";
const ProfileDescr = (props) => {
    return <div className={classes.profile__descr}>
                    <div className={classes.profile__name}>{props.profile.fullName}</div>
                    <div className={classes.profile__name}>{props.profile.aboutMe}</div>
                    {!props.anotherUserId && <div>
                        <div><b>Date of birth:</b> December 19</div>
                        <div><b>City:</b> Rivne</div>
                        <div><b>Education:</b> KPI</div>
                    </div>}
                    <div><b>Looking for a job:</b> {props.profile.lookingForAJob ? "yes" : "no"}</div>
                    <div>{props.profile.lookingForAJobDescription}</div>
                    <div><b>Contacts:</b> {Object.keys(props.profile.contacts).map(contact => <Contact contact={contact} contacts={props.profile.contacts}/>)}</div>
                </div>
}
export default ProfileDescr;