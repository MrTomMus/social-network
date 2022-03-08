import React from 'react';
import classes from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import Post from './Post/Post';
import { createAddPost, createUpdateNewPostText } from '../redux/profile-reducer'




const Profile = (props) => {
    
    let postsData = props.store.profilePage.postData.map(elem => <Post message={elem.message} like={elem.like}/>)

    let newPostElement = React.createRef() 

    let click = () => {
        props.dispatch(createAddPost());
    }

    let onChangeText = () => {
        let text = newPostElement.current.value;
        props.dispatch(createUpdateNewPostText(text))
    }
    
    return (
        <div>
            <div>
                <img src='https://klike.net/uploads/posts/2019-11/1574605232_1.jpg'></img>
            </div> 
            <div>
                <ProfileInfo />
            </div>
            <div className={classes.addPost}>
                <input onChange={onChangeText} ref={newPostElement} value={props.store.profilePage.newPostText}/>
                <button onClick={click}>Add Post</button>
            </div>
            <div>
                {postsData}
            </div>
        </div>
    )
}


export default Profile; 