import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {
    follow,
    setCurrentPage, requestUsers
} from "../../Redux/users-reducer";
import Preloader from "../Preloader/Preloader";
import {compose} from "redux";
import {
    getCurrentPage,
    getIsFetching,
    getPagesCount, getToggleFollowingInProgress,
    getToggleIsFetching,
    getTotalUsersCount, getUsers,
} from "../../Redux/users-selectors";
import Paginator from "../Paginator/Paginator";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.requestUsers(this.props.currentPage);
    }
    onPageChange = (currentPage) => {
        this.props.requestUsers(currentPage);
        this.props.setCurrentPage(currentPage);
    }
    render() {
        if (this.props.isFetching === true) {
            return <Preloader/>
        } else {
            return (<>
                <Paginator setCurrentPage={this.props.setCurrentPage} portionSize={this.props.portionSize} totalUsersCount={this.props.totalUsersCount} pagesCount={this.props.pagesCount} currentPage={this.props.currentPage} onPageChange={this.onPageChange}/>
            <Users portionSize={this.props.portionSize} toggleFollowingInProgress={this.props.toggleFollowingInProgress} follow={this.props.follow} onPageChange={this.onPageChange} users={this.props.users} currentPage={this.props.currentPage} totalUsersCount={this.props.totalUsersCount} pagesCount={this.props.pagesCount}/>
        </>)
        }
    }

}


const mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        currentPage: getCurrentPage(state),
        totalUsersCount: getTotalUsersCount(state),
        pagesCount: getPagesCount(state),
        isFetching: getIsFetching(state),
        toggleIsFetching: getToggleIsFetching(state),
        toggleFollowingInProgress: getToggleFollowingInProgress(state),
        portionSize: state.usersPage.portionSize
    }
}

export default compose(
    connect(mapStateToProps, {follow, setCurrentPage, requestUsers
}))(UsersContainer);
