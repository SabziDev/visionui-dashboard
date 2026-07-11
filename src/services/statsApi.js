import api from "./axios/api";

const getStatsApi = async ({ signal }) => {
  const res = await api.get("/stats", { signal });

  return res.data;
};

export { getStatsApi };
