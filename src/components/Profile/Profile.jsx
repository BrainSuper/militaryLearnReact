import React from "react";
import classes from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import PostsContainer from "./Posts/PostsContainer";
import Preloader from "../Preloader/Preloader";
const Profile = (props) => {
    if (!props.profile) {
        return <Preloader/>
    } else {
        return (
            <div className={classes.profile}>
                <img className={classes.profile__bg}
                     src={"https://p.bigstockphoto.com/eIdTXLbqQilMs9xbjvcs_bigstock-Aerial-View-Of-Sandy-Beach-Wit-256330393.jpg"}
                     alt=""/><img/>
                <ProfileInfo updatePhoto={props.updatePhoto} anotherUserId={props.anotherUserId} personalId={props.personalId} updateStatus={props.updateStatus} status={props.status} profile={props.profile}/>
                <PostsContainer />
            </div>
        )
    }


}
export default Profile;