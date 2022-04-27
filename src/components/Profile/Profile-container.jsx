import { connect } from "react-redux";
import Profile from './Profile';
import { createAddPost, createUpdateNewPostText, preloader, setProfilesAc } from '../redux/profile-reducer'
import React from 'react';
import axios from 'axios';
import { withRouter } from "react-router-dom";
import Preloader from "../Navbar/FindFriends/Preloader";





class ProfileApi extends React.Component {
    constructor(props){
        super(props)
        
    }
    
    componentDidMount(){
        
        let userId = this.props.match.params.userId

        if(!userId){
            userId = 2
        }
        this.props.preloaderAC(false);
        
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/`+userId).then(response => {
            this.props.setProfilesAc(response.data)
            this.props.preloaderAC(true);   
        })
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
        preloaderAC: (bool) => {
            dispatch(preloader(bool))
        }
    }     
}

let withRouterProfileApi = withRouter(ProfileApi)

export default connect(mapStateToProps, mapDispatchToProps)(withRouterProfileApi);