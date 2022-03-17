const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let inicialState = {
    postData: [
        { id: 1, message: 'Hello, how are you?', like: 12 },
        { id: 2, message: 'Its my first post', like: 15 },
    ],
    newPostText: ''
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

export default profileReducer;