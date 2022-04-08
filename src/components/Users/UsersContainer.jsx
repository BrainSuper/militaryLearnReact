import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {
    followAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC
} from "../../Redux/users-reducer";
import * as axios from "axios";

class UsersContainer extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?${this.props.currentPage}`).then(response => {
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
        })
    }
    onPageChange = (currentPage) => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}`).then(response => {
            this.props.setUsers(response.data.items);
            this.props.setCurrentPage(currentPage);
        })
    }
    render() {
        return <Users follow={this.props.follow} onPageChange={this.onPageChange} users={this.props.users} currentPage={this.props.currentPage} totalUsersCount={this.props.totalUsersCount} pagesCount={this.props.pagesCount}/>;
    }

}


const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        currentPage: state.usersPage.currentPage,
        totalUsersCount: state.usersPage.totalUsersCount,
        pagesCount: state.usersPage.pagesCount
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId, action) => {
            dispatch(followAC(userId, action));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        },
        setCurrentPage: (currentPage) => {
            dispatch(setCurrentPageAC(currentPage));
        },
        setTotalUsersCount: (totalUsersCount) => {
            dispatch(setTotalUsersCountAC(totalUsersCount));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
