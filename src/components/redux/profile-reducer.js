import { getUsers } from "../../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_PROFILES = 'SET-PROFILES';
const TOGGLE_PRELOADER = 'TOGGLE-PRELOADER';

let inicialState = {
    postData: [
        { id: 1, message: 'Hello, how are you?', like: 12 },
        { id: 2, message: 'Its my first post', like: 15 },
    ],
    newPostText: '',
    profiles: null,
    isPreloader: true,
}

const profileReducer = (state = inicialState, action) => {

    switch(action.type){
        case ADD_POST:{
            let newPost = {
                id: 5,
                message: state.newPostText,
                like: 0,
            }
            return {
                ...state,
                postData: [...state.postData, newPost],
                newPostText: ''
            }     
        }
        case UPDATE_NEW_POST_TEXT:{
            return {
                ...state,
                newPostText: action.newText
            }
        }  
        case SET_PROFILES: {
            return {
                ...state,
                profiles: action.item
            }
        }
        case 'TOGGLE-PRELOADER': {
            
            return {
                ...state,
                isPreloader: action.isPreloading
                
            }
        }
        default:
            return state
        }   
    }

export let createAddPost = () => {
    return {
        type: ADD_POST
    }
}

export let createUpdateNewPostText = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }
}    

export let setProfilesAc = (item) => {
    return {
        type: SET_PROFILES, item
        
    }
}

export let preloader = (isPreloading) => {
    return {
        type: TOGGLE_PRELOADER, isPreloading
    }
}

export const getUsersThunk = (userId) => {
   
    return (dispatch) => {
        dispatch(preloader(false));
        console.log('Thunk')
        getUsers(userId).then(response => {
            dispatch(setProfilesAc(response.data));
            dispatch(preloader(true));   
        })
    }
}

export default profileReducer;