import React from 'react';
import classes from './ProfileInfo.module.css';

const ProfileInfo = (props) =>{
    return (
        <div className={classes.profileInfo}>
            <div className={classes.avatar}>
                <img src={props.profilePage.profiles.photos.large} alt='Добавить аватар'></img>
            </div>
            <div className={classes.profileName}>
                <span>{props.profilePage.profiles.fullName}</span>
            </div>
            <div className={classes.discription}>
                 <span>Обо мне: {props.profilePage.profiles.aboutMe}</span>
            </div>
            <div className={classes.contactInfo}>
                <span>{}</span>
            </div>
        </div>
    )
}

export default ProfileInfo;