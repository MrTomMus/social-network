import React from 'react';
import classes from './MessageFriend.module.css'

const MessageFriend = (props) =>{
    return (
        <div className={classes.message}>
            {props.text}
            <img className={classes.ava} src={props.ava}></img> 
        </div >
    )
}

export default MessageFriend;