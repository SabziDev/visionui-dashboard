import api from "./axios/api";

const getProjectsApi = async ({ signal }) => {
  const res = await api.get("/projects", { signal });

  return res.data;
};

export { getProjectsApi };
