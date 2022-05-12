import React from "react";
import classes from './FindFriends.module.css';
import usersPhoto from '../../../assets/img/usersPhoto.png';
import { NavLink } from 'react-router-dom';


let FindFriends = (props) => {
    console.log(props)
    let pages = [];

        for (let i = 1; i <= Math.ceil((props.totalCount / props.countPage) - 43); i++) {
            pages.push(i);
        }
        console.log('page' + props.currentPage)

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
                            {elem.followed ? <button onClick={() => { props.unFollow(elem.id) }}>Убрать из друзей</button> : <button onClick={() => { props.follow(elem.id) }}>Добавить в друзья</button>}
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