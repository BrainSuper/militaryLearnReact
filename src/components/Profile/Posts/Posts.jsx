import React from "react";
import classes from './Posts.module.css';
import Post from "./Post/Post";
const Posts = () => {
    const postData = [
        {id: 1, message: 'First post'},
        {id: 2, message: 'Second post'}
    ]
    return (
        <div className={classes.posts}>
            <h1>My posts</h1>
            <form action="">
                <textarea name="" id=""></textarea>
                <button>Send</button>
            </form>
            {postData.map(post => <Post message={post.message}/>)}
        </div>
    )
}
export default Posts;