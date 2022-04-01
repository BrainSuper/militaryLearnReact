import React from "react";
import classes from './Posts.module.css';
import Post from "./Post/Post";
const Posts = () => {
    return (
        <div className={classes.posts}>
            <h1>My posts</h1>
            <form action="">
                <textarea name="" id=""></textarea>
                <button>Send</button>
            </form>
            <Post message='First post'/>
            <Post message='Second post'/>
        </div>
    )
}
export default Posts;