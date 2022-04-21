import React from 'react';
import preloader from '../../../assets/img/preloader.svg';
import classes from './Preloader.module.css'

let Preloader = (props) => {
    return (
        <div className={classes.preloader}>
                {props.preloader ? <img src={preloader}></img> : null}  
                {console.log(props.preloader)}
            </div>
    )
}

export default Preloader;