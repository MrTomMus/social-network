import { combineReducers, createStore } from "redux";
import profileReducer from './profile-reducer';
import messangerReducer from './messanger-reducer';


let reducers = combineReducers({
    profilePage: profileReducer,
    messangerPage: messangerReducer,
}) 

let store = createStore(reducers);

export default store;