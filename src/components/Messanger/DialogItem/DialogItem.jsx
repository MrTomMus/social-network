import React from 'react';
import classes from './DialogItem.module.css'
import {NavLink} from 'react-router-dom';


const DialogItem = (props) => {
    return (
        <div className={classes.dialog}>
            <NavLink to={'/messanger/' + props.id} activeClassName={classes.active}>
                <img className={classes.ava} src={props.ava}></img>
                {props.name}
                </NavLink>
        </div>
    )
}

export default DialogItem; 