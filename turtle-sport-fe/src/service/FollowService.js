import axios from "axios";

export const addFollow = async(account,yard) =>{
    try {
        await axios.post(`http://localhost:8080/api/booking/follow/${account}/add/${yard}`);
    } catch (e) {
        
    }
};

export const getFollow = async(account) =>{
    try {
        let res = await axios.get(`http://localhost:8080/api/booking/follow/${account}`);
        return res.data;
    } catch (e) {
        
    }
};

export const getFollowLimit = async(account,limit) =>{
    try {
        if (limit === undefined) {
            let res = await axios.get(`http://localhost:8080/api/booking/follow/${account}?limit=2`);
        return res.data; 
        }
        let res = await axios.get(`http://localhost:8080/api/booking/follow/${account}?limit=${limit}`);
        return res.data;
    } catch (e) {
        
    }
};