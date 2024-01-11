import {GET_USER_LOGIN} from "../constant";

export const authReducer = (auth = {}, action) => {
    const { type, payload } = action;
    switch (type) {
        case GET_USER_LOGIN:
            return payload;
        default:
            return auth;
    }
};