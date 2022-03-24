import { connect } from "react-redux";
import FindFriends from "./FindFriends";

let mapStateToProps = (store) => {
    console.log(store)
    return {
        findFriends: store.findFriends.users,
        
    }
}



const FindFriendsContainer = connect(mapStateToProps)(FindFriends)

export default FindFriendsContainer;