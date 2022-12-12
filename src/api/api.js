import * as axios from 'axios';


const instance = axios.create({
    withCredentials: true,
    headers: {
        'API-KEY': '92b1b8ad-79bf-4be0-96f2-9612566feef3',
    }
});

export function getMe() {
    return  instance.get('https://social-network.samuraijs.com/api/1.0/auth/me')
}


export function getPage(countPage, elem) {
    return instance.get(`https://social-network.samuraijs.com/api/1.0/users?count=${countPage}&page=${elem}`)
            
}

export function getCurrentPage(countPage, currentPage) {
    return instance.get(`https://social-network.samuraijs.com/api/1.0/users?count=${countPage}&page=${currentPage}`)
}

export function follow(id) {
    return instance.post(`https://social-network.samuraijs.com/api/1.0/follow/${id}`)
}

export function unfollow(id){
    return   instance.delete(`https://social-network.samuraijs.com/api/1.0/follow/${id}`)
}