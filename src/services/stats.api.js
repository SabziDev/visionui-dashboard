import api from "./axios/api.instance";

const getStatsApi = async ({ signal }) => {
  const res = await api.get("/stats", { signal });

  return res.data;
};

export { getStatsApi };
