


let inicialState = {
    users: [
        { id: 1, flag: 'false', name: 'Sergey', status: 'Hello', location: { country: 'Russian', city: 'Moscow'}},
        { id: 2, flag: 'true', name: 'Rinat', status: 'Hi', location: { country: 'Russian', city: 'Moscow'}},
        { id: 3, flag: 'false', name: 'Sasha', status: 'I am Boss', location: { country: 'Russian', city: 'Moscow'}}
    ]
}

const findFriendsReducer = (state = inicialState) => {
    return state;
}

export default findFriendsReducer;