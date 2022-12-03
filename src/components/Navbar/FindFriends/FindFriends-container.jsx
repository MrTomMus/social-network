import React from 'react';
import { connect } from "react-redux";
import {follow, unFollow, setUsers, setPage, preloader} from "../../redux/find-friends-reducer";
import * as axios from "axios";
import FindFriendsC from './FindFriendsC';
import Preloader from './Preloader';
import { getPage, getCurrentPage } from '../../../api/api';




class FindFriendsApi extends React.Component {
    constructor(props) {
        super(props);

    }
    
    clickPage = (elem) => {
        this.props.setPage(elem)
        this.props.preloader(true)
        console.log(elem)
        getPage(this.props.countPage, elem)
            .then(response => {
                this.props.setUsers(response.data)
                this.props.preloader(false)
        })
    }

    componentDidMount() {
        this.props.preloader(true)
        getCurrentPage(this.props.countPage, this.props.currentPage)
            .then(response => {
                this.props.setUsers(response.data)
                console.log(response)
                this.props.preloader(false)
        })
    }

    render() {
        console.log(this.props)
        return (
            <>
            <Preloader preloader={this.props.isPreloader} />
            {!this.props.isPreloader && <FindFriendsC totalCount={this.props.totalCount}
                        countPage={this.props.countPage}
                        currentPage={this.props.currentPage}
                        clickPage={this.clickPage}
                        users={this.props.users}
                        unFollow={this.props.unFollow} 
                        follow={this.props.follow}
                        preloader={this.props.isPreloader}/>}
            
              </>          
        )               
    }
}

let mapStateToProps = (store) => {
    return {
        users: store.findFriends.users,
        totalCount: store.findFriends.totalCount,
        countPage: store.findFriends.countPage,
        currentPage: store.findFriends.currentPage,
        isPreloader: store.findFriends.isPreloader   
    }
}







export default connect(mapStateToProps, {
    follow: follow,
    unFollow: unFollow,
    setUsers: setUsers,
    setPage: setPage,
    preloader: preloader,
})(FindFriendsApi);