import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/profile-reducer";
import Posts from "./Posts";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        postData: state.profilePage.postData,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addPost: (newPost) => {
            dispatch(addPostActionCreator(newPost));
        },
        postChange: (newPostText) => {
            dispatch(updateNewPostTextActionCreator(newPostText));

        }
    }
}
const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);
export default PostsContainer;