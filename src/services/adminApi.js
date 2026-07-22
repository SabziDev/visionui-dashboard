import api from "./axios/api";

const getAdminApi = async ({ signal }) => {
  const res = await api.get("/admins", { signal });

  return res.data;
};

const updateAdminApi = async ({ data, adminId }) => {
  const res = await api.patch(`/admins/${adminId}`, {
    settings: data,
  });

  return res.data;
};

export { getAdminApi, updateAdminApi };
