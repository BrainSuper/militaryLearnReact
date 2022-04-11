import React from 'react';
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}
const withAuthRedirect = (Component) => {

    class RedirectComponent extends React.Component {
        render() {
            if (!this.props.isAuth) {
                return <Redirect to={'/login'}/>
            } else {
                return <Component {...this.props}/>;
            }
        }
    }
    let connectedRedirectComponent = connect(mapStateToProps)(RedirectComponent);
    return connectedRedirectComponent;
}

export default withAuthRedirect;