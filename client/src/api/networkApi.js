import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000",
});

export const getNetwork = async () => {
  const res = await API.get("/network");
  return res.data.data;
};