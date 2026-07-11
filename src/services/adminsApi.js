import api from "./axios/api";

const getAdminsApi = async ({ signal }) => {
  const res = await api.get("/admins", { signal });

  return res.data;
};

export { getAdminsApi };
