import axios from "./axios";

export const getReports = async () => {
  const response = await axios.get("/reports");
  return response.data.data;
};