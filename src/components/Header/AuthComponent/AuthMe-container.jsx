
import { connect } from "react-redux";
import AuthMe from "./AuthMe";

let mapStateToProps = (store) => {
    return {
        userInfo: store.header.userInfo
    }
}

const AuthMeContainer = connect(mapStateToProps)(AuthMe);

export default AuthMeContainer;