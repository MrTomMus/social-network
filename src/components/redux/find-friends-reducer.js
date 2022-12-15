import { unfollow, follow } from "../../api/api";


const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_PAGE = 'SET-PAGE';
const TOGGLE_PRELOADER = 'TOGGLE-PRELOADER';
const TOGGLE_DISABLED = 'TOGGLE-DISABLED';


let inicialState = {
    users: [],
    totalCount: 0,
    countPage: 10,
    currentPage: 1,
    isPreloader: true,
    followedInProgress: [],
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
        case 'SET-USERS': {
            return {
                ...state,
                users: [...action.data.items],
                totalCount: action.data.totalCount-18405
            }
        }
        case 'SET-PAGE': {
            return {
                ...state,
                currentPage: action.page,
            }
        }
        case 'TOGGLE-PRELOADER': {
            
            return {
                ...state,
                isPreloader: action.isPreloading
                
            }
        }

        case 'TOGGLE-DISABLED': {
            
            return {
                ...state, 
                followedInProgress: action.isDisabling 
                    ? [...state.followedInProgress, action.id]
                    : state.followedInProgress.filter(id => id != action.id)
            }
        }
        default: {
            return state
        }
    }

}


export let followAccept = (userId) => {
    return {
        type: FOLLOW, userId
    }   
}

export let unFollowAccept = (userId) => {
    return {
        type: UNFOLLOW, userId
    }
}

export let setUsers = (data) => {
    return {
        type: SET_USERS, data, 
    }
}

export let setPage = (page) => {
    return {
        type: SET_PAGE, page
    }
}
export let preloader = (isPreloading) => {
    
    return {
        type: TOGGLE_PRELOADER, isPreloading
    }
}

export let toggleDisabled = (isDisabling, id) => {
    return {
        type: TOGGLE_DISABLED, isDisabling, id
    }
}

export const usersUnfollow = (id) => {
    
    return (dispatch) => {
        console.log('test')
        dispatch(toggleDisabled(true, id))
                               
        unfollow(id).then(response => {
            console.log(response)
            if(response.data.resultCode == 0){
                dispatch(unFollowAccept(id))
            }   
            dispatch(toggleDisabled(false, id))
        })
    }
}

export const usersFollow = (id) => {
    return (dispatch) => {
        dispatch(toggleDisabled(true, id))
                                
        follow(id).then(response => {
            if(response.data.resultCode == 0){
                dispatch(followAccept(id))
                }
            dispatch(toggleDisabled(false, id))
            })
    }
}


export default findFriendsReducer;