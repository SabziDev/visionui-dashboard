import api from "./axios/api";

const getAdminApi = async ({ signal }) => {
  const res = await api.get("/admins", { signal });

  return res.data;
};

export { getAdminApi };
