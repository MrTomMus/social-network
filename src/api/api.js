import * as axios from 'axios';

export function getMe() {
    return  axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {
        withCredentials: true
    })
}


export function getPage(countPage, elem) {
    return axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${countPage}&page=${elem}`, {
        withCredentials: true
    })
            
}

export function getCurrentPage(countPage, currentPage) {
    return axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${countPage}&page=${currentPage}`, 
    {withCredentials: true
    })
}

export function follow(id) {
    return axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${id}`, {}, {
        withCredentials: true,
        headers: {
            'API-KEY': '92b1b8ad-79bf-4be0-96f2-9612566feef3'
        } 
     })
}

export function unfollow(id){
    return   axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${id}`, {
        withCredentials: true,
        headers: {
            'API-KEY': '92b1b8ad-79bf-4be0-96f2-9612566feef3'
        }
        
    })
}