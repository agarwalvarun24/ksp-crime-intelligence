import axios from "./axios";

export const getReports = async () => {
  const response = await axios.get("/api/reports");
  return response.data.data;
};