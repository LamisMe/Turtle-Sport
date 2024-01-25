import axios from "axios";

export const addBooking = async(cus,yard,orderDto) =>{
    try {
        console.log(cus);
        await axios.post(`http://localhost:8080/api/booking/add/${cus}/${yard}`,orderDto)
    } catch (e) {
        return 200;
    }
};

export const getHistory = async(account) =>{
    try {
        let res = await axios.get(`http://localhost:8080/api/booking/history/${account}`);
        return res.data;
    } catch (e) {
        
    }
};

export const getTime = async(yard) =>{
    try {
        let res = await axios.get(`http://localhost:8080/api/booking/time/${yard}`);
        return res.data;
    } catch (e) {
        
    }
};

export const getLimit5 = async(yard) =>{
    try {
        let res = await axios.get(`http://localhost:8080/api/booking/top`);
        return res.data;
    } catch (e) {
        
    }
};
export const getDateDuplicate = async(id) =>{
    try {
        let res = await axios.get(`http://localhost:8080/api/booking/payment/${id}`);
        console.log(res);
        return res.data;
    } catch (e) {
        return undefined;
    }
};

export const paymentBooking = async(id) =>{
    try {
        let res = await axios.patch(`http://localhost:8080/api/booking/payment/${id}`);
        return res.status;
    } catch (e) {
        
    }
};