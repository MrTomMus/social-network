// import * as axios from "axios";
// import React from "react";
// import classes from './FindFriends.module.css';
// import usersPhoto from '../../../assets/img/usersPhoto.png';



// const FindFriends = (props) => {
    
//     let getUsers = () => {
//         console.log('click')
//     if(props.users.length === 0){

//         axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
//             props.setUsers(response.data.items)
            
//         })
//     }
// }
    
//     return  <div>
//         <button className={classes.buttonUsers} onClick={getUsers}>get users</button>
//         {
//             props.users.map((elem) => ( 
//                 <div key={elem.id} className={classes.itemUsers}>
//                     <div>
//                         <img src={elem.photos.small != null ? elem.photos.small : usersPhoto }/>
//                     </div>
//                     <div>
//                         {elem.name}   
//                     </div>
//                     <div>
//                         Статус: {elem.status}
//                     </div>
//                     <div>
//                         <span>{'elem.location.city'}</span>
//                     </div>
//                     <div>
//                         <span>{'elem.location.country'}</span>
//                     </div>
//                     <div>
//                         {elem.followed ? <button onClick={()=>{props.unFollow(elem.id)}}>Убрать из друзей</button> : <button onClick={()=>{props.follow(elem.id)}}>Добавить в друзья</button>}
//                     </div>
//                 </div>
//             )
//             )
//         }
               
//     </div>
        
    
// }


// export default FindFriends;