import { connect } from "react-redux";
import Profile from './Profile';
import { createAddPost, createUpdateNewPostText } from '../redux/profile-reducer'


let mapStateToProps = (store) => {
    return {
        profilePage: store.profilePage,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        createAddPost: () => {
            dispatch(createAddPost())
        },
        createUpdateNewPostText: (text) => {
            dispatch(createUpdateNewPostText(text))
        }
    }
}



const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile);

export default ProfileContainer;