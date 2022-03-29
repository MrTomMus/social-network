import { connect } from "react-redux";
import { followAc, unFollowAc,} from "../../redux/find-friends-reducer";

import FindFriends from "./FindFriends";

let mapStateToProps = (store) => {
    
    return {
        findFriends: store.findFriends.users,
        
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAc(userId))
        },
        unFollow: (userId) => {
            dispatch(unFollowAc(userId))
        }
    }
        
}



const FindFriendsContainer = connect(mapStateToProps, mapDispatchToProps)(FindFriends)

export default FindFriendsContainer;