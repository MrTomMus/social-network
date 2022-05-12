const SET_STATE = 'SET-STATE'


let inicialState = {
    data: {
        id: null,
        login: null,
        email: null,
        },
    messages: [],
    fieldsErrors: [],
    resultCode: 1
}


const headerReaducer = (state = inicialState, action) => {
    switch(action.type){
        case SET_STATE:{
            return {
                ...state,
                data: action.data
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