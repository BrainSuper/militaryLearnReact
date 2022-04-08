import React from "react";
import classes from './Users.module.css';
import userImg from '../../assets/images/user.png';

const Users = (props) => {
        let pagesCount = Math.ceil(props.totalUsersCount / props.pagesCount);
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }

        return <div className={classes.users}>
            <h3>Users</h3>
            {pages.map(page => {
                return <span onClick={() => {
                    props.onPageChange(page);
                }} className={props.currentPage === page && classes.active}>{page}</span>
            })}
            {props.users.map(user => {
                return <div className={classes.user}>
                    <div className={classes.user__img}>
                        <img src={user.photos.small != null ? user.photos.small : userImg} alt=""/>
                        {user.followed
                            ? <button onClick={() => {
                                props.follow(user.id, false)
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                props.follow(user.id, true)
                            }}>Follow</button>}
                    </div>
                    <div className={classes.user__descr}>
                        <div className={classes.user__descr__ident}>
                            <div className={classes.user__descr__name}>{user.name}</div>
                            <div className={classes.user__descr__status}>{user.status}</div>
                        </div>
                        <div className={classes.user__descr__location}>
                            <div className={classes.user__descr__city}>City,</div>
                            <div className={classes.user__descr__country}>Country</div>
                        </div>
                    </div>
                </div>
            })}

        </div>



}


export default Users;