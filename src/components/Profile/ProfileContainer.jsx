import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import * as axios from "axios";
import {getStatus, setUserProfile, updateStatus} from "../../Redux/profile-reducer";
import {Redirect, withRouter} from "react-router-dom";
import {profileAPI} from "../../api/api";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.personalId
            if (!userId) {
                this.props.history.push('/login')
            }

        }
        this.props.setUserProfile(userId);
        this.props.getStatus(userId);
    }

    render() {
        return <Profile {...this.props}/>;
    }
}

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    isAuth: state.auth.isAuth,
    personalId: state.auth.userId

})
export default compose(
    connect(mapStateToProps, {setUserProfile, getStatus, updateStatus}),
    withRouter
)(ProfileContainer);
