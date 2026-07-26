import axios from "axios";

const api = axios.create({
  baseURL: "https://crime-api-50044357808.development.catalystappsail.in",
});

export default api;