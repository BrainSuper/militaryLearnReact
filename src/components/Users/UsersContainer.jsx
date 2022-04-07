import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {followAC, setUsersAC} from "../../Redux/users-reducer";
import UsersClass from "./UsersClass";

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId, action) => {
            dispatch(followAC(userId, action));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersClass);
