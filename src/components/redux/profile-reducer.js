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
            let copyState = {...state}
            let newPost = {
                id: 5,
                message: copyState.newPostText,
                like: 0,
            }
            copyState.postData.push(newPost);
            copyState.newPostText = '';
            return copyState;
        }
        case UPDATE_NEW_POST_TEXT:{
            let copyState = {...state}
            copyState.newPostText = action.newText;
            return copyState
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