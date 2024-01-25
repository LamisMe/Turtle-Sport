import axios from "axios";
import { toast } from "react-toastify";

export const YardList = async (currentPage,address) => {
  try {
    
    let res = await axios.get(`http://localhost:8080/api/yards?page=${currentPage}&nameSearch=${address}`);
    return res;
  } catch (e){
    return undefined;
  }
};

export const CreateYard = async (yardDto) => {
  try {
    await axios.post(`http://localhost:8080/api/yards/create`, yardDto);
    return true;
  } catch (e){
    return false;
  }
};

export const GetTypeYard = async () => {
  try {
    let res = await axios.get(`http://localhost:8080/api/yards/type_yard`);
    return res;
  } catch {
    return undefined;
  }
};

export const GetYardDetail = async (id) => {
  try {
    let res = await axios.get(`http://localhost:8080/api/yards/detail/${id}`);
    return res;
  } catch {
    return undefined;
  }
};

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
