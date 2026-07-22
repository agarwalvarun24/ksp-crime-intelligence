import axios from "./axios";

export const getDashboardSummary = async () => {
  const response = await axios.get("/dashboard/summary");
  return response.data.data;
};