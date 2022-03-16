import { connect } from "react-redux";
import FriendsNav from "./FriendsNav";


let mapStateToProps = (store) => {
    return {
        dialogsData: store.messangerPage.dialogsData,
    }
}

const FriendsNavContainer = connect(mapStateToProps)(FriendsNav)

export default FriendsNavContainer; 