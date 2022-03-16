import { connect } from "react-redux";
import Friends from "./Friends";


let mapStateToProps = (store) => {
    return {
        dialogsData: store.messangerPage.dialogsData,
    }
}

const FriendsContainer = connect(mapStateToProps)(Friends)

export default FriendsContainer;