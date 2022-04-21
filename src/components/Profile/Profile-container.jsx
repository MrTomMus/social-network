import { connect } from "react-redux";
import Profile from './Profile';
import { createAddPost, createUpdateNewPostText, setProfilesAc } from '../redux/profile-reducer'
import React from 'react';
import axios from 'axios';
import Preloader from "../Navbar/FindFriends/Preloader";





class ProfileApi extends React.Component {
    constructor(props){
        super(props)
        
    }

    componentDidMount(){
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {
            this.props.setProfilesAc(response.data)
            
        })
    }

    render() {
        return (
           !this.props.profilePage.profiles ? null : <Profile {...this.props} />
        )  
    }
}


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
        },
        setProfilesAc: (item) => {
            dispatch(setProfilesAc(item))
        }
    }     
}



export default connect(mapStateToProps, mapDispatchToProps)(ProfileApi);