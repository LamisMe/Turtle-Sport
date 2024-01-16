import axios from "axios";
import {toast} from "react-toastify";

export const  YardList = async(address) => {
    try{
        const res = axios.get(`http://localhost:8080/api/yards?address=${address}`);
        return res;
    }catch{
        return undefined;
    }
}
export function showMsgWarning(msg) {
    toast.warning(msg, {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 2000,
    });
}

export function showMsg(msg) {
    toast.success(msg, {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 2000,
    });
} 