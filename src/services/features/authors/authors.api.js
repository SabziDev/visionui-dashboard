import api from "@/services/axios/api.instance";

const getAuthorsApi = async ({ signal }) => {
  const res = await api.get("/authors", {
    signal,
  });

  return res.data;
};

export { getAuthorsApi };
