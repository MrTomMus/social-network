import { connect } from "react-redux";
import Profile from './Profile';
import { createAddPost, createUpdateNewPostText, getUsersThunk, setProfilesAc,  } from '../redux/profile-reducer'
import React from 'react';
import { withRouter } from "react-router-dom";
import Preloader from "../Navbar/FindFriends/Preloader";
import { getUsers } from "../../api/api";





class ProfileApi extends React.Component {
    constructor(props){
        super(props)
        
    }
    
    componentDidMount(){
        console.log(this.props)
        let userId = this.props.match.params.userId

        if(!userId){
            userId = 2
        }
       this.props.getUsersThunk(userId)
    }

    render() {
        return (
           !this.props.profilePage.profiles ? <Preloader preloader={this.props.profilePage.isPreloader} /> : <Profile {...this.props} />
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
        },
        // preloaderAC: (bool) => {
        //     dispatch(preloader(bool))
        // },
        getUsersThunk: (userId) => {
            dispatch(getUsersThunk(userId))
        }
    }     
}

let withRouterProfileApi = withRouter(ProfileApi)

export default connect(mapStateToProps, mapDispatchToProps)(withRouterProfileApi);