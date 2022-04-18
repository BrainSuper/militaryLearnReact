import React from "react";
import classes from './User.module.css';
import userImg from '../../../assets/images/user.png';
import {Link} from "react-router-dom";

const User = ({photos: {small}, id, name, status, followed, toggleFollowingInProgress, follow}) => {

            return <div className={classes.user}>
                <div className={classes.user__img}>
                    <Link to={'/profile/' + id}>
                        <img src={small != null ? small : userImg} alt=""/>
                    </Link>
                    {followed
                        ? <button disabled={toggleFollowingInProgress.some(id => id === id)} onClick={() => {
                            follow(id, false, 'delete');
                        }}>Unfollow</button>
                        : <button disabled={toggleFollowingInProgress.some(id => id === id)} onClick={() => {
                            follow(id, true, 'post');
                        }}>Follow</button>}
                </div>
                <div className={classes.user__descr}>
                    <div className={classes.user__descr__ident}>
                        <div className={classes.user__descr__name}>{name}</div>
                        <div className={classes.user__descr__status}>{status}</div>
                    </div>
                    <div className={classes.user__descr__location}>
                        <div className={classes.user__descr__city}>City,</div>
                        <div className={classes.user__descr__country}>Country</div>
                    </div>
                </div>
            </div>
}
export default User;