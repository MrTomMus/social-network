import React from "react";
import { connect } from "react-redux";
import AuthMe from "./AuthMe";

let mapStateToProps = (store) => {
    return {
        data: store.header.data
    }
}

const AuthMeContainer = connect(mapStateToProps)(AuthMe);

export default AuthMeContainer;