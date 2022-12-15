import { connect } from "react-redux";
import Messanger from "./Messanger";
import { createAddMessage, createUpdateNewMessageText } from '../redux/messanger-reducer'

let mapStateToProps = (state) => {
    return {
        messangerPage: state.messangerPage,
        resultCode: state.header.resultCode
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


const MessangerContainer = connect(mapStateToProps, mapDispatchToProps)(Messanger);

export default MessangerContainer;