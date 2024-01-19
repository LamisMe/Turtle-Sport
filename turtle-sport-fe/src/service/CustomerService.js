import axios from "axios";

export const getAllYard = async (user) => {
  try {
    let res = await axios.get(
      `http://localhost:8080/api/customers/yards?name=${user}`
    );
    return res;
  } catch (e) {
    return undefined;
  }
};
