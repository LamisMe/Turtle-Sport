import * as authService from "../../service/AuthService";
import {GET_USER_LOGIN} from "../constant";

export const loginUser = (account) => async (dispatch) => {
    try {
        let res = await authService.login(account);
        localStorage.setItem('user', JSON.stringify(res));
        dispatch({
            type: GET_USER_LOGIN,
            payload: res,
        });
    } catch (error) {
        throw error
    }
};
