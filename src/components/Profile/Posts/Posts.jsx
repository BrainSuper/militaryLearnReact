import React from "react";
import classes from './Posts.module.css';
import Post from "./Post/Post";

const Posts = (props) => {
    let newPostText = React.createRef();
    const addPost = () => {
        let newPost = newPostText.current.value;
        alert(newPost);
    }
    return (
        <div className={classes.posts}>
            <h1>My posts</h1>
            <form action="">
                <textarea ref={newPostText}></textarea>
                <button onClick={addPost}>Send</button>
            </form>
            {props.postData.map(post => <Post message={post.message}/>)}
        </div>
    )
}
export default Posts;