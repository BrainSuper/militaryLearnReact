import React, {useEffect} from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatus, setUserProfile, updatePhoto, updateStatus} from "../../Redux/profile-reducer";
import {Navigate, useParams} from "react-router-dom";
import {compose} from "redux";

function ProfileContainer(props) {
    let {userId} = useParams();
    useEffect(() => {
        if (!userId) {
        userId = props.personalId
        if (!userId) {
            // props.history.push('/login')
            return <Navigate to={'/login'}/>
        }

    }
        props.setUserProfile(userId);
        props.getStatus(userId);
    }, [userId])

    return <Profile anotherUserId={userId} {...props}/>;
}
// componentDidMount() {
//     // let userId = this.props.match.params.userId;
//     let userId;
//     if (!userId) {
//         userId = this.props.personalId
//         if (!userId) {
//             this.props.history.push('/login')
//         }
//
//     }
//     this.props.setUserProfile(userId);
//     this.props.getStatus(userId);
// }
const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    isAuth: state.auth.isAuth,
    personalId: state.auth.userId

})
export default compose(
    connect(mapStateToProps, {setUserProfile, getStatus, updateStatus, updatePhoto})
)(ProfileContainer);
