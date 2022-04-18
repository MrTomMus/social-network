import React from 'react';
import { connect } from "react-redux";
import { followAc, unFollowAc, setUsersAc, setPageAC, preloaderAc} from "../../redux/find-friends-reducer";
import * as axios from "axios";
import FindFriendsC from './FindFriendsC';
import Preloader from './Preloader';




class FindFriendsApi extends React.Component {
    constructor(props) {
        super(props);

    }
    
    clickPage = (elem) => {
        this.props.setPage(elem)
        this.props.setPriloader(true)
        console.log(elem)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.countPage}&page=${elem}`).then(response => {
            this.props.setUsers(response.data)
            this.props.setPriloader(false)
        })
    }

    componentDidMount() {
        this.props.setPriloader(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.countPage}&page=${this.props.currentPage}`).then(response => {
            this.props.setUsers(response.data)
            console.log(response)
            this.props.setPriloader(false)
        })
    }

    render() {
        console.log(this.props)
        return (
            <>
            <Preloader preloader={this.props.isPreloader} />
            <FindFriendsC totalCount={this.props.totalCount}
                        countPage={this.props.countPage}
                        currentPage={this.props.currentPage}
                        clickPage={this.clickPage}
                        users={this.props.users}
                        unFollow={this.props.unFollow} 
                        follow={this.props.follow}/>
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

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAc(userId))
        },
        unFollow: (userId) => {
            dispatch(unFollowAc(userId))
        },
        setUsers: (data) => {
            dispatch(setUsersAc(data));
        }, 
        setPage: (page) => {
            dispatch(setPageAC(page))
        },
        setPriloader: (bool) => {
            dispatch(preloaderAc(bool))
        }
    }    
}





export default connect(mapStateToProps, mapDispatchToProps)(FindFriendsApi);