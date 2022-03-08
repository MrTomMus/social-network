import messangerReducer from "./messanger-reducer";
import profileReducer from "./profile-reducer";


let store = {
    _state: {
        profilePage: {
            postData: [
                { id: 1, message: 'Hello, how are you?', like: 12 },
                { id: 2, message: 'Its my first post', like: 15 },
            ],
            newPostText: ''
        },
        messangerPage: {
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
        },


    },
    _callSubscriber() {
        console.log('State changed')
    },
    getState() {
        console.log('Привет')
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messangerPage = messangerReducer(this._state.messangerPage, action)
        this._callSubscriber(this._state);
    }
}



export default store;
window.store = store;