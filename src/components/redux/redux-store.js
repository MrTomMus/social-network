import { combineReducers, createStore } from "redux";
import profileReducer from './profile-reducer';
import messangerReducer from './messanger-reducer';
import findFriendsReducer from "./find-frends-reducer";


let reducers = combineReducers({
    profilePage: profileReducer,
    messangerPage: messangerReducer,
    findFriends: findFriendsReducer,
}) 

let store = createStore(reducers);

export default store;