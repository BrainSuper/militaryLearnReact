import React from "react";
import classes from './Users.module.css';
import Paginator from "../Paginator/Paginator";
import User from "./User/User";

const Users = (props) => {
    return <div className={classes.users}>
        <h3>Users</h3>
        <Paginator totalUsersCount={props.totalUsersCount} pagesCount={props.pagesCount} currentPage={props.currentPage} onPageChange={props.onPageChange}/>
        {props.users.map(user => <User id={user.id} photos={user.photos} followed={user.followed} toggleFollowingInProgress={props.toggleFollowingInProgress} follow={props.follow} name={user.name} status={user.status}/>)}
    </div>
}
export default Users;