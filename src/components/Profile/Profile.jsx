import React from "react";
import classes from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import PostsContainer from "./Posts/PostsContainer";
const Profile = (props) => {

    return (
        <div className={classes.profile}>
            <img className={classes.profile__bg}
                 src="https://p.bigstockphoto.com/eIdTXLbqQilMs9xbjvcs_bigstock-Aerial-View-Of-Sandy-Beach-Wit-256330393.jpg"
                 alt=""/><img/>
            <ProfileInfo/>
            <PostsContainer />
        </div>
    )
}
export default Profile;