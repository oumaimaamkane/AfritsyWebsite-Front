import axios from "axios";

const API_URL = "http://127.0.0.1:8000/api";

export function login(email, password) {
    return axios.post(`${API_URL}/auth/login`, {
        email,
        password
    }).then(response => {
        const { token, user } = response.data;
        return { token, user }; 
    });
}

export function logout(token) {
    return axios.post(`${API_URL}/auth/logout`, {}, {
        headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
        }
    });
}
