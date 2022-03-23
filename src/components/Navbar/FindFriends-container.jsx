import { connect } from "react-redux";
import FindFriends from "./FindFriends";

let mapStateToProps = (store) => {
    return {
        findFriends: store.users,
        
    }
}



const FindFriendsContainer = connect(mapStateToProps)(FindFriends)

export default FindFriendsContainer;