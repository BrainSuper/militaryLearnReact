import React from "react";
import classes from './Posts.module.css';
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/profile-reducer";

const Posts = (props) => {
    let textArea = React.createRef();
    const onAddPost = (e) => {
        e.preventDefault();
        props.addPost();
    }

    const onPostChange = () => {
        props.postChange(textArea.current.value)
    }
    return (
        <div className={classes.posts}>
            <h1>My posts</h1>
            <form action="">
                <textarea ref={textArea} onChange={onPostChange} value={props.profilePage.newPost}></textarea>
                <button onClick={onAddPost}>Send</button>
            </form>
            {props.profilePage.postData.map(post => <Post message={post.message}/>)}
        </div>
    )
}
export default Posts;