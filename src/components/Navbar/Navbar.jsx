import React from "react";
import classes from './Navbar.module.css';
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={classes.nav}>
            <div className={classes.item}><Link to='/profile' activeClassName={classes.active}>Profile</Link></div>
            <div className={classes.item}><Link to='/dialogs' activeClassName={classes.active}>Messages</Link></div>
            <div className={classes.item}><Link to='/users' activeClassName={classes.active}>Users</Link></div>
            <div className={classes.item}><a href='#'>News</a></div>
            <div className={classes.item}><a href='#'>Music</a></div>
            <div className={classes.item}><a href='#'>Settings</a></div>
        </nav>
    )
}
export default Navbar;