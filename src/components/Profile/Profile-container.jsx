import { connect } from "react-redux";
import Profile from './Profile';
import { createAddPost, createUpdateNewPostText, setProfilesAc } from '../redux/profile-reducer'
import React from 'react';
import axios from 'axios';
import { withRouter } from "react-router-dom";





class ProfileApi extends React.Component {
    constructor(props){
        super(props)
        console.log(props)
    }

    componentDidMount(){
        
        let userId = this.props.match.params.userId

        if(!userId){
            userId = 2
        }
      
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/`+userId).then(response => {
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

let withRouterProfileApi = withRouter(ProfileApi)

export default connect(mapStateToProps, mapDispatchToProps)(withRouterProfileApi);