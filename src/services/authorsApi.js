import api from "./axios/api";

const getAuthorsApi = async ({ signal }) => {
  const res = await api.get("/authors", { signal });

  return res.data;
};

export { getAuthorsApi };
