import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {
    follow,
    setCurrentPage, getUsers
} from "../../Redux/users-reducer";
import Preloader from "../Preloader/Preloader";
import {compose} from "redux";
import withAuthRedirect from "../../hoc/withAuthRedirect";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage);
    }
    onPageChange = (currentPage) => {
        this.props.getUsers(currentPage);
        this.props.setCurrentPage(currentPage);
    }
    render() {
        if (this.props.isFetching === true) {
            return <Preloader/>
        } else {
            return <Users toggleFollowingInProgress={this.props.toggleFollowingInProgress} follow={this.props.follow} onPageChange={this.onPageChange} users={this.props.users} currentPage={this.props.currentPage} totalUsersCount={this.props.totalUsersCount} pagesCount={this.props.pagesCount}/>;
        }
    }

}


const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        currentPage: state.usersPage.currentPage,
        totalUsersCount: state.usersPage.totalUsersCount,
        pagesCount: state.usersPage.pagesCount,
        isFetching: state.usersPage.isFetching,
        toggleIsFetching: state.usersPage.toggleIsFetching,
        toggleFollowingInProgress: state.usersPage.toggleFollowingInProgress
    }
}

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, {follow, setCurrentPage, getUsers
}))(UsersContainer);
