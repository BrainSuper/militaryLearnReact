import React from "react";
import classes from './Posts.module.css';
import Post from "./Post/Post";

const Posts = (props) => {
    let textArea = React.createRef();
    const addPost = (e) => {
        e.preventDefault();
        props.dispatch({
            type: 'ADD-POST'
        });
    }

    const onPostChange = () => {
        props.dispatch({
            type: 'UPDATE-NEW-POST-TEXT',
            newPostText: textArea.current.value
        });
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