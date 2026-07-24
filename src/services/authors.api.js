import api from "./axios/axios.instance";

const getAuthorsApi = async ({ signal }) => {
  const res = await api.get("/authors", { signal });

  return res.data;
};

export { getAuthorsApi };
