import * as FollowService from "../../service/FollowService";
import { GET_ADD_FOLLOW } from "../constant";

export const addFollow = (account,yard) => async (dispatch) => {
    try {
        let res = await FollowService.addFollow(account,yard);
        dispatch({
            type: GET_ADD_FOLLOW,
            payload: res,
        });
    } catch (error) {
        throw error
    }
};

export const getFollow = (account) => async (dispatch) => {
    try {
        let res = await FollowService.getFollow(account);
        dispatch({
            type: GET_ADD_FOLLOW,
            payload: res,
        });
    } catch (error) {
        throw error
    }
};