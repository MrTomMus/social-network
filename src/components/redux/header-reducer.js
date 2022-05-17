const SET_STATE = 'SET-STATE'


let inicialState = {
    userInfo: {
        id: null,
        login: null,
        email: null,
        },
    messages: [],
    fieldsErrors: [],
    resultCode: 0
}


const headerReaducer = (state = inicialState, action) => {
    switch(action.type){
        case SET_STATE:{
            return {
                ...state,
                userInfo: action.data.data,
                messages: [action.data.messages],
                resultCode: action.data.resultCode
            }
        }
        default:{
            return state;
        }
    }
}

export let setApi = (data) => {
    return {
        type: SET_STATE, data
    }
}

export default headerReaducer;