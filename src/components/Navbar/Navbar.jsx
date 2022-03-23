import React from 'react';
import classes from './Navbar.module.css';
import { NavLink } from 'react-router-dom';
import FriendsNavContainer from './friendsNav/FriendsNav-container';






const Navbar = () => {
    
    return (
        <nav className={classes.nav}> 
            <div className={classes.item}>
                <NavLink to="/profile" activeClassName={classes.active}>Profile</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/messanger" activeClassName={classes.active}>Messanger</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/news" activeClassName={classes.active}>News</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/music" activeClassName={classes.active}>Music</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/settings" activeClassName={classes.active}>Settings</NavLink>
            </div>
            <div className={classes.item + ' ' +classes.friends}>
                <NavLink to="/friends" activeClassName={classes.active}>Friends</NavLink>
                <FriendsNavContainer/>
            </div>
            <div className={classes.item}>
                <NavLink to="/find-friends" activeClassName={classes.active}>Find Friends</NavLink> 
            </div>
            
        </nav>
    )
}


export default Navbar; 