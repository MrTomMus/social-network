import React from "react";
import classes from './FindFriends.module.css';



const FindFriends = (props) => {
    console.log(props)
    

    return  <div>
        {
            props.findFriends.map((elem) => ( 
                <div key={elem.id} className={classes.itemUsers}>
                    <div>
                        {elem.name}   
                    </div>
                    <div>
                        Статус: {elem.status}
                    </div>
                    <div>
                        <span>{elem.location.city}</span>
                    </div>
                    <div>
                        <span>{elem.location.country}</span>
                    </div>
                    <div>
                        {elem.flag ? <button onClick={()=>{props.unFollow(elem.id)}}>Убрать из друзей</button> : <button onClick={()=>{props.follow(elem.id)}}>Добавить в друзья</button>}
                    </div>
                </div>
            )
            )
        }
               
    </div>
        
    
}


export default FindFriends;