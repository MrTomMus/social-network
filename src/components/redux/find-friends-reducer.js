const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS'


let inicialState = {
    users: []
}

const findFriendsReducer = (state = inicialState, action) => {
    switch(action.type){
        case 'FOLLOW':{
            return {
                ...state,
                users: state.users.map(user => {
                    if(user.id === action.userId){
                        return {...user, followed: true}
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
                        return {...user, followed: false}
                    }else{
                        return user;
                    }
                })
            }
        }
        case 'SET-USERS':{
            return {
                ...state,
                users: [...action.users]
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

export let setUsersAc = (users) => {
    return {
        type: SET_USERS, users
    }
}


export default findFriendsReducer;