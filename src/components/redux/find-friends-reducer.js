const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_PAGE = 'SET-PAGE';
const TOGGLE_PRELOADER = 'TOGGLE_PRELOADER';


let inicialState = {
    users: [],
    totalCount: 0,
    countPage: 10,
    currentPage: 1,
    isPreloader: true,
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
                totalCount: action.data.totalCount-18380
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

export let setUsersAc = (data) => {
    return {
        type: SET_USERS, data, 
    }
}

export let setPageAC = (page) => {
    return {
        type: SET_PAGE, page
    }
}
export let preloaderAC = (isPreloading) => {
    return {
        type: TOGGLE_PRELOADER, isPreloading
    }
}


export default findFriendsReducer;