import { useQuery } from "@tanstack/react-query";

import { getPaymentApi } from "@/services/payment.api";

const usePayment = () => {
  const queryKey = ["payment"];

  const { data: payment, ...rest } = useQuery({
    queryKey,
    queryFn: ({ signal }) => getPaymentApi({ signal }),
  });

  return { payment, ...rest };
};

export { usePayment };
