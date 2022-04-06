import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/profile-reducer";
import Posts from "./Posts";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator());
        },
        postChange: (newPostText) => {
            dispatch(updateNewPostTextActionCreator(newPostText));

        }
    }
}
const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);
export default PostsContainer;