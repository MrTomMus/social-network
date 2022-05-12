import React from "react";


let AuthMe = (props) => {
    
    return (
        <div>
            <div>email: {props.data.data.email}</div>
            <div>login: {props.data.data.login}</div>
            <div>id: {props.data.data.id}</div>  
        </div>
    )
}


export default AuthMe;