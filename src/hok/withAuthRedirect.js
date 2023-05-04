import { connect } from "react-redux"
import { Redirect } from "react-router-dom/cjs/react-router-dom"

let mapStateToProps = (state) => ({
    resultCode: state.header.resultCode
})


export let WithAuthRedirect = (Component) => {
    let RedirectComponent = (props) => {
        console.log(props)
        if(props.resultCode == 1) {
            return <Redirect to='/login' />
        }else {
            return <Component {...props} />
        }        
    }

    let ConnectedAuthRedirectComponent = connect(mapStateToProps)(RedirectComponent);

    return ConnectedAuthRedirectComponent;
}

