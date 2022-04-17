import React from 'React';
import preloader from '../../../assets/img/preloader.gif';
import classes from './Preloader.module.css'

let Preloader = (props) => {
    return (
        <div className={classes.preloader}>
                {!props.isPreloader ? <img src={preloader}></img> : 'Привет'}  
                {console.log(props.isPreloader)}
            </div>
    )
}

export default Preloader;