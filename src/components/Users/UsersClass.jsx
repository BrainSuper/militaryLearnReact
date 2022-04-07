import React from "react";
import classes from './Users.module.css';
import * as axios from "axios";
import userImg from '../../assets/images/user.png';

class UsersClass extends React.Component {

    constructor(props) {
        super(props);
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            this.props.setUsers(response.data.items)
        })
    }
    render() {
        return <div className={classes.users}>
            <h3>Users</h3>
            {this.props.users.map(user => {
                return <div className={classes.user}>
                    <div className={classes.user__img}>
                        <img src={user.photos.small != null ? user.photos.small : userImg } alt=""/>
                        {user.followed
                            ? <button onClick={() => {this.props.follow(user.id, false)}}>Unfollow</button>
                            : <button onClick={() => {this.props.follow(user.id, true)}}>Follow</button>}
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


}


export default UsersClass;