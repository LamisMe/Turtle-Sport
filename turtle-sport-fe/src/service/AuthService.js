import axios from "axios";
import { jwtDecode } from "jwt-decode";

export default function authHeader() {
    const user = JSON.parse(localStorage.getItem('user'));

    if (user && user.accessToken) {
        return {
            "Authorization": 'Bearer ' + user.accessToken,
            "Content-Type": 'application/json'
        };
    } else {
        return {};
    }
};

export const login = async (account) => {
    try {
        let res = await axios.post("http://localhost:8080/api/login", account);
        return res.data;
    } catch (e) {
        throw e.response;
    }
}

export const infoToken = () => {
    const jwtToken = localStorage.getItem("user")
    if(jwtToken != null) {
        const decodedToken = jwtDecode(jwtToken);
        return decodedToken;
    }else{
        return null;
    }
}

export const getRoleByJwt = () => {
    const jwt = localStorage.getItem("user");
    if (jwt) {
        return jwtDecode(jwt).role[0].authority;
    } else {
        return null;
    }
};