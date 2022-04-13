import React from "react";
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {login} from "../../Redux/auth-reducer";
import {Input} from "../../custom/formControl/formControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {Redirect} from "react-router-dom";

const maxLength30 = maxLengthCreator(30);

const LoginForm = (props) => {
    return <form onSubmit = {props.handleSubmit}>
        <div>
            <Field type="text" name='login' validate={[required, maxLength30]} component={Input}/>
        </div>
        <div>
            <Field type="password" name='password' validate={[required, maxLength30]} component={Input} />
        </div>
        <div>
            <Field type="checkbox" name='remember me' component={Input}/> remember me
        </div>
        <div>
            <button>Submit</button>
        </div>
        {props.error && <div>
            {props.error}
        </div>}
    </form>
}
const LoginReduxForm = reduxForm({
    form: 'Login'
})(LoginForm)


const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData);
        props.login(formData.login, formData.password, formData.rememberMe);
    }
     if (props.isAuth) {
         return <Redirect to={'/profile'}/>
     } else {
         return <div>
             <h2>Login</h2>
             <LoginReduxForm onSubmit={onSubmit}/>
         </div>
     }

}
const mapStateToProps = (state) => ({isAuth: state.auth.isAuth});
export default connect(mapStateToProps, {login})(Login);