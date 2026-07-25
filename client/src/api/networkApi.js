import axios from "./axios";


export const getNetwork = async () => {

    const response = await axios.get("/network");

    return response.data.data;

};