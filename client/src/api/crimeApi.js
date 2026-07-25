import axios from "axios";

const API = axios.create({
    baseURL: "http://localhost:5000"
});

export const getCrimes = async (filters = {}) => {
    const res = await API.get("/crime", {
        params: filters
    });

    return res.data.data;
};

export const getCrimeStatistics = async () => {
    const res = await API.get("/crime/statistics");
    return res.data.data;
};