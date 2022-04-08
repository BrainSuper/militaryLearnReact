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

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?${this.props.currentPage}`).then(response => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
        })
    }
    onPageChange = (currentPage) => {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}`).then(response => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(response.data.items);
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
