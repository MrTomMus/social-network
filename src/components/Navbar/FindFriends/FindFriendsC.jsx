import React from "react";
import classes from './FindFriends.module.css';
import usersPhoto from '../../../assets/img/usersPhoto.png';
import { NavLink } from 'react-router-dom';
import axios from "axios";
import { follow, unfollow } from "../../../api/api";


let FindFriends = (props) => {
    console.log(props)
    let pages = [];

        for (let i = 1; i <= Math.ceil((props.totalCount / props.countPage)); i++) {
            pages.push(i);
        }
        
  
    return (
        <div className={classes.page}>
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
                            {elem.followed ? <button disabled={props.followedInProgress.some(id => id === elem.id)} onClick={() => { 
                                props.toggleDisabled(true, elem.id)
                               
                                unfollow(elem.id).then(response => {
                                    console.log(response)
                                    if(response.data.resultCode == 0){
                                        console.log('test 1')
                                        console.log(response)
                                        props.unFollow(elem.id)
                                    }   
                                    props.toggleDisabled(false, elem.id)
                                })
                             }}>Убрать из друзей</button> : <button disabled={props.followedInProgress.some(id => id === elem.id)} onClick={() => { 
                                props.toggleDisabled(true, elem.id)
                                
                                follow(elem.id).then(response => {
                                     if(response.data.resultCode == 0){
                                         console.log('test')
                                         console.log(response)
                                         props.follow(elem.id)
                                     }
                                     props.toggleDisabled(false, elem.id)
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