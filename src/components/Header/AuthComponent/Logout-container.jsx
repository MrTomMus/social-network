import { connect } from "react-redux";
import Logout from "./Logout";

let mapStateToProps = (store) => {
    return {
        messages: store.header.messages
    }
}

const LogoutContainer = connect(mapStateToProps)(Logout);

export default LogoutContainer;