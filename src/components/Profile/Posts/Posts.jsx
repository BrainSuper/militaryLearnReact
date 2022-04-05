import React from "react";
import classes from './Posts.module.css';
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/store";

const Posts = (props) => {
    let textArea = React.createRef();
    const addPost = (e) => {
        e.preventDefault();
        props.dispatch(addPostActionCreator());
    }

    const onPostChange = () => {
        props.dispatch(updateNewPostTextActionCreator(textArea.current.value));
    }
    return (
        <div className={classes.posts}>
            <h1>My posts</h1>
            <form action="">
                <textarea ref={textArea} onChange={onPostChange} value={props.profilePage.newPost}></textarea>
                <button onClick={addPost}>Send</button>
            </form>
            {props.profilePage.postData.map(post => <Post message={post.message}/>)}
        </div>
    )
}
export default Posts;