import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Header.module.css';
import logo from '../../assets/img/logo.png'


const Header = (props) => {
    console.log(props)
    return (
        <header className={classes.header}>
            <div className={classes.logo}>
                <img src={logo} alt='logo'></img> 
            </div>
            <div className={classes.login}>
                {props.resultCode == 0 ? <NavLink to='/myAuth'>{props.userInfo.login}</NavLink> : <NavLink to='/notAuth'>login</NavLink>}
            </div>
            
        </header>
        
    )
}


export default Header;