import React from 'react';
import classes from './ItemFriends.module.css'


let ItemFriends = (props) => {
    console.log(props)
    return (
        <div className={classes.itemUsers}>
            <div>
                {props.name}
            </div>
            <div>
                Статус: {props.status}
            </div>
            <div>
                <span>{props.city}</span>
            </div>
            <div>
                <span>{props.country}</span>
            </div>
            <div>
                {props.flag ? <button>Убрать из друзей</button> : <button>Добавить в друзья</button>}
            </div>
        </div>
    )
}

export default ItemFriends