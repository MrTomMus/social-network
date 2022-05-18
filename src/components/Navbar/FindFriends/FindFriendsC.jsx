import React from "react";
import classes from './FindFriends.module.css';
import usersPhoto from '../../../assets/img/usersPhoto.png';
import { NavLink } from 'react-router-dom';
import axios from "axios";


let FindFriends = (props) => {
    console.log(props)
    let pages = [];

        for (let i = 1; i <= Math.ceil((props.totalCount / props.countPage) - 43); i++) {
            pages.push(i);
        }
        
  
    return (
        <div>
            <div className={classes.pageNumber}>{pages.map(elem =>
                <span className={props.currentPage === elem && classes.selectedPage} onClick={() => props.clickPage(elem)}>{elem}</span>
            )}</div>

            {
                props.users.map((elem) => (
                    <div key={elem.id} className={classes.itemUsers}>
                        <div>
                            <NavLink to={'/profile/' + elem.id}>
                                <img src={elem.photos.small != null ? elem.photos.small : usersPhoto} />
                            </NavLink>   
                        </div>
                        <div>
                            {elem.name}
                        </div>
                        <div>
                            Статус: {elem.status}
                        </div>
                        <div>
                            <span>{'elem.location.city'}</span>
                        </div>
                        <div>
                            <span>{'elem.location.country'}</span>
                        </div>
                        <div>
                            {elem.followed ? <button onClick={() => { 
                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${elem.id}`, {
                                    withCredentials: true,
                                    headers: {
                                        'API-KEY': '92b1b8ad-79bf-4be0-96f2-9612566feef3'
                                    }
                                    
                                })
                                .then(response => {
                                    console.log(response)
                                    if(response.data.resultCode == 0){
                                        console.log('test 1')
                                        console.log(response)
                                        props.unFollow(elem.id)
                                    }   
                                })
                             }}>Убрать из друзей</button> : <button onClick={() => { 
                                 axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${elem.id}`, {}, {
                                    withCredentials: true,
                                    headers: {
                                        'API-KEY': '92b1b8ad-79bf-4be0-96f2-9612566feef3'
                                    } 
                                 })
                                 .then(response => {
                                     if(response.data.resultCode == 0){
                                         console.log('test')
                                         console.log(response)
                                         props.follow(elem.id)
                                     }
                                 })
                              }}>Добавить в друзья</button>}
                        </div>
                    </div>
                )
                )
            }
            <div className={classes.pageNumber}>{pages.map(elem =>
                <span className={props.currentPage === elem && classes.selectedPage} onClick={() => props.clickPage(elem)}>{elem}</span>
            )}</div>
        </div>
    )
            }

    export default FindFriends;