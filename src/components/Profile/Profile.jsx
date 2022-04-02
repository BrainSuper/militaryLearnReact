import React from "react";
import classes from './Profile.module.css';
import Posts from "./Posts/Posts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
const Profile = () => {
    return (
        <div className={classes.profile}>
            <img className={classes.profile__bg}
                 src="https://p.bigstockphoto.com/eIdTXLbqQilMs9xbjvcs_bigstock-Aerial-View-Of-Sandy-Beach-Wit-256330393.jpg"
                 alt=""/><img/>
            <ProfileInfo/>
            <Posts/>
        </div>
    )
}
export default Profile;