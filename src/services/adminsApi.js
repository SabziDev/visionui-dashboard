import api from "./axios/api";

const getAdminsApi = async () => {
  const res = await api.get("/admins");

  return res.data;
};

export { getAdminsApi };
