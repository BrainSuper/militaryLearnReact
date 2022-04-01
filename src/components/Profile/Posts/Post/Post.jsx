import React from "react";
import classes from './Post.module.css';
const Post = () => {
    return (
        <div className={classes.post}>
            <img src="https://www.vokrug.tv/pic/news/5/f/c/2/rsz300x300_5fc2879465129c11d65749ab9e3db7cc.jpg" alt="ava"/>
            <span>First post</span>
        </div>
    )
}
export default Post;