import React from "react";
import classes from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={classes.header}>
            <img src="https://cdn.logo.com/hotlink-ok/logo-social.png" alt=""></img>
                {props.isAuth ? <span>{props.login}</span>
                    : <NavLink to={'/login'}><span>LOGIN</span></NavLink>}


        </header>
    )
}
export default Header;