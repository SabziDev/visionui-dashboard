import { usePayment } from "@/services/hooks/usePayment/usePayment";

import CreditCardCvv from "./CreditCardCvv/CreditCardCvv";
import CreditCardExpirationDate from "./CreditCardExpirationDate/CreditCardExpirationDate";
import CreditCardNumber from "./CreditCardNumber/CreditCardNumber";
import CreditCardTitle from "./CreditCardTitle/CreditCardTitle";

const CardBalance = () => {
  const { payment, isPending } = usePayment();

  return (
    <div className="flex h-60 w-115 flex-col justify-between gradient-card">
      <CreditCardTitle />

      <div className="flex flex-col gap-1.5 select-none">
        <CreditCardNumber payment={payment} isPending={isPending} />

        <div className="flex gap-8.5">
          <CreditCardExpirationDate payment={payment} isPending={isPending} />
          <CreditCardCvv payment={payment} isPending={isPending} />
        </div>
      </div>
    </div>
  );
};

export default CardBalance;
