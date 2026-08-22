import api from "@/services/axios/api.instance";

const getProjectsApi = async (signal) => {
  const res = await api.get("/projects", {
    signal,
  });

  return res.data;
};

export { getProjectsApi };
