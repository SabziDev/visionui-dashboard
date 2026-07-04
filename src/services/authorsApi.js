import api from "./axios/api";

const getAuthorsApi = async () => {
  const res = await api.get("/authors");

  return res.data;
};

export { getAuthorsApi };
