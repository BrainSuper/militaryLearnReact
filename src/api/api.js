import * as axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '0ca74e1a-ce19-47fc-b756-82eb83ab65b9'
    }
})
export const usersAPI = {
    getUsers(currentPage) {
        return instance.get(`users?page=${currentPage}`).then(response => response.data)
    }
}
export const followUnfollowAPI = (id, param) => {
    if (param === "post") {
        return instance.post(`follow/${id}`).then(response => response.data)
    } else {
        return instance.delete(`follow/${id}`).then(response => response.data)
    }
}

export const profileAPI = {
    setProfile(userId) {
        return instance.get(`profile/${userId}`).then(response => response.data)
    },
    getStatus(userId) {
        return instance.get(`profile/status/${userId}`).then(response => response.data);
    },
    updateStatus(status) {
        return instance.put(`profile/status`, {status: status}).then(response => response.data);
    },
    uploadPhoto(photo) {
        let formData = new FormData();
        formData.append("img", photo);
        return instance.put(`profile/photo`, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            }
        }).then(response => response.data);
    }
}
export const authAPI = {
    checkAuth() {
        return instance.get(`auth/me`).then(response => response.data)
    },
    login(login, password, rememberMe) {
        return instance.post(`auth/login`, {
            email: login,
            password: password,
            rememberMe: rememberMe
        }).then(response => response.data)
    },
    logout() {
        return instance.delete(`auth/login`).then(response => response.data)
    }
}
