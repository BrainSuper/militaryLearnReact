import React from "react";
import classes from './Posts.module.css';
import Post from "./Post/Post";

const Posts = (props) => {
    let textArea = React.createRef();
    const addPost = () => {
        debugger;
        let newPostText = textArea.current.value;
        props.addPost(newPostText);
    }
    return (
        <div className={classes.posts}>
            <h1>My posts</h1>
            <form action="">
                <textarea ref={textArea}></textarea>
                <button onClick={addPost}>Send</button>
            </form>
            {props.postData.map(post => <Post message={post.message}/>)}
        </div>
    )
}
export default Posts;