const ADD_MES_USER = 'ADD-MES-USER';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let inicialState = {
    dialogsData: [
        { id: 1, name: 'Сергей', ava: 'https://www.kindpng.com/picc/m/495-4952535_create-digital-profile-icon-blue-user-profile-icon.png' },
        { id: 2, name: 'Иван', ava: 'https://www.kindpng.com/picc/m/495-4952535_create-digital-profile-icon-blue-user-profile-icon.png' },
        { id: 3, name: 'Ринат', ava: 'https://www.kindpng.com/picc/m/495-4952535_create-digital-profile-icon-blue-user-profile-icon.png' },
        { id: 4, name: 'Александр', ava: 'https://www.kindpng.com/picc/m/495-4952535_create-digital-profile-icon-blue-user-profile-icon.png' },
        { id: 5, name: 'Светлана', ava: 'https://www.kindpng.com/picc/m/495-4952535_create-digital-profile-icon-blue-user-profile-icon.png' },
    ],
    messageDataUser: [
        { id: 1, message: 'Hello', ava: 'https://www.kindpng.com/picc/m/495-4952535_create-digital-profile-icon-blue-user-profile-icon.png' },

    ],
    messageDataFriend: [
        { id: 1, message: 'How are you?', ava: 'https://www.kindpng.com/picc/m/495-4952535_create-digital-profile-icon-blue-user-profile-icon.png' },
    ],
    newMessageText: ''
}

const messangerReducer = (state = inicialState, action) => {
    switch(action.type){
        case ADD_MES_USER:{
            let copyState = {...state}
            let newMessage = {
                id: 2,
                message: copyState.newMessageText,
                ava: 'https://www.kindpng.com/picc/m/495-4952535_create-digital-profile-icon-blue-user-profile-icon.png',
            }
            copyState.messageDataUser.push(newMessage);
            console.log('Привет')
            copyState.newMessageText = '';
            return copyState;
        }    
        case UPDATE_NEW_MESSAGE_TEXT:{
            let copyState = {...state}
            copyState.newMessageText = action.newText;
            return copyState;
        }    
        default:
            return state;
    }   
}

export let createAddMessage = () => {
    return {
        type: ADD_MES_USER
    }
}

export let createUpdateNewMessageText = (text) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        newText: text
    }
}


export default messangerReducer;