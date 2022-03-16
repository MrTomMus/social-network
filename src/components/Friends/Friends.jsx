import React from 'react';
import classes from './Friends.module.css';


const Friends = (props) =>{
    
    let friends = props.dialogsData.map((elem) => {
        return (
        <div key={elem.id} className={classes.friendItem}>
            <img src={elem.ava}></img>
            <span>{elem.name}</span>
        </div>
        )
    })

    return (
        <div className={classes.friends}>
            {friends}
        </div>
    )
}

export default Friends;
