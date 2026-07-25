import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000",
});

export const getCrimes = async () => {
  const res = await API.get("/crime");
  return res.data.data;
};

export const getCrimeStatistics = async () => {
  const res = await API.get("/crime/statistics");
  return res.data.data;
};