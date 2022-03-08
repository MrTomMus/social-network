import React from 'react';
import classes from './ProfileInfo.module.css';

const ProfileInfo = () =>{
    return (
        <div className={classes.profileInfo}>
            <div className={classes.avatar}>
                <img src='' alt='Добавить аватар'></img>
                    </div>
            <div className={classes.discription}>
                Описание
            </div>
        </div>
    )
}

export default ProfileInfo;