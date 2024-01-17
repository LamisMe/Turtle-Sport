import axios from "axios";
import {toast} from "react-toastify";

export const  YardList = async(address) => {
    try{
        const res = await axios.get(`http://localhost:8080/api/yards?address=${address}`);
        return res;
    }catch{
        return undefined;
    }
}

export const  CreateYard = async (yard) => {
    console.log(9);
    try{
        console.log("okmnjjjjj");
        let res = await axios.port("http://localhost:8080/api/yards",yard);
        return res;
    }catch{
        return undefined;
    }
}


export const  GetTypeYard = async() => {
    try{
        let res = await axios.get(`http://localhost:8080/api/yards/type_yard`);
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