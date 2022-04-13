import React from "react";
import classes from './Posts.module.css';
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/profile-reducer";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../../custom/formControl/formControls";

const maxLength100 = maxLengthCreator(100);
const AddPostForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <Field type='text' name='post' validate={[required, maxLength100]} component={Textarea}></Field>
        <button>Send</button>
    </form>
}
const AddPostReduxForm = reduxForm({form: 'addPost'})(AddPostForm)
const Posts = (props) => {
    const onAddPost = (formData) => {
        props.addPost(formData.post);
    }

    return (
        <div className={classes.posts}>
            <h1>My posts</h1>
            <AddPostReduxForm onSubmit={onAddPost}/>
            {props.profilePage.postData.map(post => <Post message={post.message}/>)}
        </div>
    )
}
export default Posts;