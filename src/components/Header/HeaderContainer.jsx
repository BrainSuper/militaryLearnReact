import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {checkAuth} from "../../Redux/auth-reducer";
import * as axios from "axios";
import {authAPI} from "../../api/api";

class HeaderContainer extends React.Component {
    componentDidMount() {
        authAPI.checkAuth().then(response => {
                if (response.resultCode === 0) {
                    const {id, email, login} = response.data;
                    this.props.checkAuth(id, email, login);
                }

        })
    }

    render() {
        return <Header {...this.props}/>
    }


}
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})
export default connect(mapStateToProps, {checkAuth})(HeaderContainer);