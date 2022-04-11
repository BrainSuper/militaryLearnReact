import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import * as axios from "axios";
import {setUserProfile} from "../../Redux/profile-reducer";
import {Redirect, withRouter} from "react-router-dom";
import {profileAPI} from "../../api/api";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import {compose} from "redux";
class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }
        this.props.setUserProfile(userId);
    }

    render() {
        return <Profile {...this.props}/>;
    }
}

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile

})
export default compose(
    withAuthRedirect,
    connect(mapStateToProps, {setUserProfile}),
    withRouter
)(ProfileContainer);
