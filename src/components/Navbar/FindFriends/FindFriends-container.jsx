import { connect } from "react-redux";
import { followAc, unFollowAc, setUsersAc} from "../../redux/find-friends-reducer";

import FindFriends from "./FindFriends";

let mapStateToProps = (store) => {
    
    return {
        users: store.findFriends.users,
        
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
        setUsers: (users) => {
            dispatch(setUsersAc(users));
        } 
    }
        
}



const FindFriendsContainer = connect(mapStateToProps, mapDispatchToProps)(FindFriends)

export default FindFriendsContainer;