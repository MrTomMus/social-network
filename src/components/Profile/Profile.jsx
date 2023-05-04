import React from 'react';
import classes from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import Post from './Post/Post';





const Profile = (props) => {
   
    let postsData = props.profilePage.postData.map(elem => <Post key={elem.id} message={elem.message} like={elem.like}/>)

    let newPostElement = React.createRef() 

    let click = () => {
        props.createAddPost();
    }

    let onChangeText = () => {
        let text = newPostElement.current.value;
        props.createUpdateNewPostText(text)
    }
    
    return (
        <div className={classes.profile}>
            <div>
                <ProfileInfo {...props} />
            </div>
            <div className={classes.addPost}>
                <input onChange={onChangeText} ref={newPostElement} value={props.profilePage.newPostText}/>
                <button onClick={click}>Add Post</button>
            </div>
            <div>
                {postsData}
            </div>
        </div>
    )
}


export default Profile; 