import React from 'react';
import classes from './MessageUser.module.css'

const MessageUser = (props) =>{
    return (
        <div className={classes.message}>
            <img className={classes.ava} src={props.ava}></img>
            {props.text}
        </div >
    )
}

export default MessageUser;