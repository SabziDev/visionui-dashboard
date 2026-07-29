import api from "./axios/axios.instance";

const getPaymentApi = async ({ signal }) => {
  const res = await api.get("/payment", { signal });

  return res.data;
};

export { getPaymentApi };
