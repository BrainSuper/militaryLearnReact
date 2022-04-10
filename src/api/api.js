import * as axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '03dc2ce9-bd56-44ab-be4f-ade43a3c5ec7'
    }
})
export const usersAPI = {
    getUsers(currentPage) {
        return instance.get(`users?page=${currentPage}`).then(response => response.data)
    }
}
export const followUnfollowAPI = {
    follow(id) {
        return instance.post(`follow/${id}`).then(response => response.data)
    },
    unfollow(id) {
        return instance.delete(`follow/${id}`).then(response => response.data)
    }
}

export const profileAPI = {
    setProfile(userId) {
        return instance.get(`profile/${userId}`).then(response => response.data)
    }
}
export const authAPI = {
    checkAuth() {
        return instance.get(`auth/me`).then(response => response.data)
    }
}