import React from "react";
import ItemFriends from "./ItemFriends/ItemFriends";


const FindFriends = (props) => {

    console.log(props.findFriends)
    
    let newFriends = props.findFriends.map((elem) => <ItemFriends
        id={elem.id} 
        name={elem.name} 
        city={elem.location.city} 
        country={elem.location.country} 
        status={elem.status} 
        flag={elem.flag}
        />)

    return (
        <div>
            {newFriends}
        </div>
    )
}


export default FindFriends;