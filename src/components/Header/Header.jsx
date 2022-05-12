import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Header.module.css';


const Header = (props) => {
    console.log(props)
    return (
        <header className={classes.header}>
            <img src='https://w7.pngwing.com/pngs/573/202/png-transparent-earth-globe-universal-job-ag-universal-job-ag-planet-earth-globe-logo-world.png'></img>
            {props.data.resultCode == 0 ? <NavLink to='/myAuth'>{props.data.data.login}</NavLink> : <NavLink to='/notAuth'>login</NavLink>}
        </header>
        
    )
}


export default Header;