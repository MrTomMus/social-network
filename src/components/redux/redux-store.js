import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import profileReducer from './profile-reducer';
import messangerReducer from './messanger-reducer';
import findFriendsReducer from "./find-friends-reducer";
import headerReaducer from "./header-reducer";


let reducers = combineReducers({
    header: headerReaducer,
    profilePage: profileReducer,
    messangerPage: messangerReducer,
    findFriends: findFriendsReducer,
}) 

let store = createStore(reducers, applyMiddleware(thunk));

export default store;