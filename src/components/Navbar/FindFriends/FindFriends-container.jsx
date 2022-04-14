import { connect } from "react-redux";
import { followAc, unFollowAc, setUsersAc, setPageAC} from "../../redux/find-friends-reducer";
import FindFriends from "./FindFriendsC";

let mapStateToProps = (store) => {
    
    return {
        users: store.findFriends.users,
        totalCount: store.findFriends.totalCount,
        countPage: store.findFriends.countPage,
        currentPage: store.findFriends.currentPage
        
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
        }
    }
        
}



const FindFriendsContainer = connect(mapStateToProps, mapDispatchToProps)(FindFriends)

export default FindFriendsContainer;