import React from "react";
import classes from './FindFriends.module.css';



const FindFriends = (props) => {
    
    if(props.users.length === 0){
        props.setUsers([
            { id: 1, flag: false, ava: 'https://www.kindpng.com/picc/m/495-4952535_create-digital-profile-icon-blue-user-profile-icon.png', name: 'Sergey', status: 'Hello', location: { country: 'Russian', city: 'Moscow'}},
            { id: 2, flag: true, ava: 'https://www.kindpng.com/picc/m/495-4952535_create-digital-profile-icon-blue-user-profile-icon.png', name: 'Rinat', status: 'Hi', location: { country: 'Russian', city: 'Moscow'}},
            { id: 3, flag: false, ava: 'https://www.kindpng.com/picc/m/495-4952535_create-digital-profile-icon-blue-user-profile-icon.png', name: 'Sasha', status: 'I am Boss', location: { country: 'Russian', city: 'Moscow'}}
        ])
    }
    
    

    return  <div>
        {
            props.users.map((elem) => ( 
                <div key={elem.id} className={classes.itemUsers}>
                    <div>
                        <img src={elem.ava}/>
                    </div>
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