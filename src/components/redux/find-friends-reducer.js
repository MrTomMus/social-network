const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';


let inicialState = {
    users: [
        { id: 1, flag: false, name: 'Sergey', status: 'Hello', location: { country: 'Russian', city: 'Moscow'}},
        { id: 2, flag: true, name: 'Rinat', status: 'Hi', location: { country: 'Russian', city: 'Moscow'}},
        { id: 3, flag: false, name: 'Sasha', status: 'I am Boss', location: { country: 'Russian', city: 'Moscow'}}
    ]
}

const findFriendsReducer = (state = inicialState, action) => {
    switch(action.type){
        case 'FOLLOW':{
            return {
                ...state,
                users: state.users.map(user => {
                    if(user.id === action.userId){
                        return {...user, flag: true}
                    }else{
                        return user;
                    }
                })
            }
        }
        case 'UNFOLLOW':{
            return {
                ...state,
                users: state.users.map(user => {
                    if(user.id === action.userId){
                        return {...user, flag: false}
                    }else{
                        return user;
                    }
                })
            }
        }
        default: {
            return state
        }
    }

}


export let followAc = (userId) => {
    return {
        type: FOLLOW, userId
    }   
}

export let unFollowAc = (userId) => {
    return {
        type: UNFOLLOW, userId
    }
}


export default findFriendsReducer;