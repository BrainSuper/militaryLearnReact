import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers, toggleIsFetching
} from "../../Redux/users-reducer";
import * as axios from "axios";
import Preloader from "../Preloader/Preloader";
import {usersAPI} from "../../api/api";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true);
        usersAPI.getUsers(this.props.currentPage).then(response => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(response.items);
            this.props.setTotalUsersCount(response.totalCount);
        })
    }
    onPageChange = (currentPage) => {
        this.props.toggleIsFetching(true);
        usersAPI.getUsers(currentPage).then(response => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(response.items);
            this.props.setCurrentPage(currentPage);
        })
    }
    render() {
        if (this.props.isFetching === true) {
            return <Preloader/>
        } else {
            return <Users follow={this.props.follow} onPageChange={this.onPageChange} users={this.props.users} currentPage={this.props.currentPage} totalUsersCount={this.props.totalUsersCount} pagesCount={this.props.pagesCount}/>;
        }
    }

}


const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        currentPage: state.usersPage.currentPage,
        totalUsersCount: state.usersPage.totalUsersCount,
        pagesCount: state.usersPage.pagesCount,
        isFetching: state.usersPage.isFetching
    }
}

export default connect(mapStateToProps, {
    follow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching
})(UsersContainer);
