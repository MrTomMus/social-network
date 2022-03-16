import React from 'react';
import classes from './FriendsNav.module.css';



const FriendsNav = (props) => {
   console.log(props)

    let friendsNavItem = props.dialogsData.map((elem) => {
        if(elem.id<=3){
          return  ( 
            <div key={elem.id} className={classes.friendsNav}>
                <div className={classes.block}>
                    <img src={elem.ava}/>
                </div>
                <div className={classes.block}>
                    <span>{elem.name}</span>
                </div> 
           </div>  
        )}
    })

    return (
        <div>
            {friendsNavItem}
        </div>
    )
}

export default FriendsNav;