import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

export const getAnalytics = async () => {
  const res = await API.get("/analytics");
  return res.data.data;
};