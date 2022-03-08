import React from 'react';
import classes from './Post.module.css';


const Post = (props) =>{
    return (
        <div className={classes.content}>
            <div className={classes.item}> 
                <div>
                <img src="https://www.kindpng.com/picc/m/495-4952535_create-digital-profile-icon-blue-user-profile-icon.png" alt="" />
                   {props.message} 
                </div>
                <div>
                    Like {props.like}
                </div>
            </div>
        </div>
    )
}

export default Post;