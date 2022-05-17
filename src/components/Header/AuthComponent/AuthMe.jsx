import React from "react";


let AuthMe = (props) => {
    return (
        <div>
            <div>email: {props.userInfo.email}</div>
            <div>login: {props.userInfo.login}</div>
            <div>id: {props.userInfo.id}</div>  
        </div>
    )
}


export default AuthMe;