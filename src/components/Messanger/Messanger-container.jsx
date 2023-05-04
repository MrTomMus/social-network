import { connect } from "react-redux";
import Messanger from "./Messanger";
import { createAddMessage, createUpdateNewMessageText } from '../redux/messanger-reducer'
import { Redirect } from 'react-router-dom';
import { WithAuthRedirect } from "../../hok/withAuthRedirect";
import { compose } from "redux";

let mapStateToProps = (state) => {
    return {
        messangerPage: state.messangerPage,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        createAddMessage: () => {
            dispatch(createAddMessage())
        },
        createUpdateNewMessageText: (text) => {
            dispatch(createUpdateNewMessageText(text))
        }
    }
    
}


export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    WithAuthRedirect
)(Messanger);