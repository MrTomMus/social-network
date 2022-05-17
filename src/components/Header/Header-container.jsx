import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import {setApi} from './../redux/header-reducer'
import * as axios from 'axios';




class HeaderApi extends React.Component {
    constructor(props){
        super(props)
    }
    
    componentDidMount(){
        axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {
            withCredentials: true
        }).then(response => {
            this.props.setApi(response.data)
            console.log(response.data)
        })
    }

    render(){
        return (
            <Header {...this.props}  />
        )
    }
}


let mapStateToProps = (store) => {
    return {
        userInfo: store.header.userInfo,
        messages: store.header.messages,
        resultCode: store.header.resultCode
    }
}

export default connect(mapStateToProps, {
    setApi: setApi,
})(HeaderApi);