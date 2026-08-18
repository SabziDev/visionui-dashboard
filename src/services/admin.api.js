import api from "./axios/api.instance";

const getAdminApi = async ({ signal }) => {
  const res = await api.get("/admins", { signal });

  return res.data;
};

const updateAdminApi = async ({ id, data }) => {
  const res = await api.patch(`/admins/${id}`, {
    settings: data,
  });

  return res.data;
};

export { getAdminApi, updateAdminApi };
