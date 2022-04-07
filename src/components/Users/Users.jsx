import React from "react";
import classes from './Users.module.css';
import * as axios from "axios";
import userImg from '../../assets/images/user.png';

const Users = (props) => {
    if (props.users.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            props.setUsers(response.data.items)
        })
        // props.setUsers([
        //     {
        //         id: 1,
        //         photoURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/User_font_awesome.svg/2048px-User_font_awesome.svg.png',
        //         followed: true,
        //         name: 'Boris',
        //         status: 'Created new text message',
        //         city: 'Rivne',
        //         country: 'Ukraine'
        //     },
        //     {
        //         id: 2,
        //         photoURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/User_font_awesome.svg/2048px-User_font_awesome.svg.png',
        //         followed: false,
        //         name: 'Niko',
        //         status: 'Created new text message2',
        //         city: 'Kyiv',
        //         country: 'Ukraine'
        //     },
        //     {
        //         id: 3,
        //         photoURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/User_font_awesome.svg/2048px-User_font_awesome.svg.png',
        //         followed: true,
        //         name: 'Evgeniy',
        //         status: 'Created new text message3',
        //         city: 'Ternopil',
        //         country: 'Ukraine'
        //     },
        //     {
        //         id: 4,
        //         photoURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/User_font_awesome.svg/2048px-User_font_awesome.svg.png',
        //         followed: false,
        //         name: 'Dmitry',
        //         status: 'Created new text message4',
        //         city: 'Lviv',
        //         country: 'Ukraine'
        //     },
        //     {
        //         id: 5,
        //         photoURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/User_font_awesome.svg/2048px-User_font_awesome.svg.png',
        //         followed: true,
        //         name: 'Sasha',
        //         status: 'Created new text message5',
        //         city: 'Odessa',
        //         country: 'Ukraine'
        //     },
        //
        // ])
    }

    return <div className={classes.users}>
        <h3>Users</h3>
        {props.users.map(user => {
            return <div className={classes.user}>
                <div className={classes.user__img}>
                    <img src={user.photos.small != null ? user.photos.small : userImg } alt=""/>
                    {user.followed
                        ? <button onClick={() => {props.follow(user.id, false)}}>Unfollow</button>
                        : <button onClick={() => {props.follow(user.id, true)}}>Follow</button>}
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