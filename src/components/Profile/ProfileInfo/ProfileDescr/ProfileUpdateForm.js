import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input, Textarea} from "../../../../custom/formControl/formControls";
const ProfileUpdateForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <button>Save</button>
        <Field name='fullName' component={Input} type='text' placeholder='name'/>
        <Field name='aboutMe' component={Input} type='text' placeholder='about me'/>
        <div><b>Looking for a job:</b>
            <Field name='lookingForAJob' component={Input} type='checkbox'/>
        </div>
        <Field name='lookingForAJobDescription' component={Textarea} type='text' placeholder='lookingForAJobDescription'/>
        <div><b>Contacts:</b> {Object.keys(props.profile.contacts).map(contact => <Field placeholder={contact} key={contact} name={contact} component={Input} type='text'/>)}</div>
        {props.error && <div>
            {props.error}
        </div>}
    </form>
}
const ProfileUpdateFormRedux = reduxForm({form: 'profileUpdateForm'})(ProfileUpdateForm);
export default ProfileUpdateFormRedux;