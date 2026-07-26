import axios from "axios";

const API = axios.create({
  baseURL: "https://crime-api-50044357808.development.catalystappsail.com",
});

export const getAnalytics = async () => {
  const res = await API.get("/analytics");
  return res.data.data;
};