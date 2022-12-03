import * as axios from 'axios';

export function getMe() {
    return  axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {
        withCredentials: true
    })
}


export function getPage(countPage, elem) {
    return axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${countPage}&page=${elem}`, 
    {withCredentials: true
    })
            
}

export function getCurrentPage(countPage, currentPage) {
    return axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${countPage}&page=${currentPage}`, 
    {withCredentials: true
    })
}