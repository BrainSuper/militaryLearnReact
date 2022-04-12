import React from "react";
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {login} from "../../Redux/auth-reducer";

const LoginForm = (props) => {
    return <form onSubmit = {props.handleSubmit}>
        <div>
            <Field type="text" name='login' component='input'/>
        </div>
        <div>
            <Field type="password" name='password' component='input' />
        </div>
        <div>
            <Field type="checkbox" name='remember me' component='input'/> remember me
        </div>
        <div>
            <button>Submit</button>
        </div>
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
    return <div>
        <h2>Login</h2>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}
const mapStateToProps = (state) => ({});
export default connect(mapStateToProps, {login})(Login);