import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/profile-reducer";
import Posts from "./Posts";

const PostsContainer = (props) => {
    const addPost = () => {
        props.store.dispatch(addPostActionCreator());
    }

    const postChange = (newPostText) => {
        props.store.dispatch(updateNewPostTextActionCreator(newPostText));
    }
    return <Posts profilePage={props.store.getState().profilePage} addPost={addPost} postChange={postChange}/>
}
export default PostsContainer;