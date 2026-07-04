import api from "./axios/api";

const getStatsApi = async () => {
  const res = await api.get("/stats");

  return res.data;
};

export { getStatsApi };
