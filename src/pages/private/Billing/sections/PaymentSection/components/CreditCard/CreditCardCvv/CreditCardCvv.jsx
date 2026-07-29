import Skeleton from "react-loading-skeleton";

const CreditCardCvv = ({ payment, isPending }) => {
  return (
    <div className="flex flex-col">
      <span className="text-xs">CVV</span>
      <span className="font-VazirBold text-sm">
        {isPending ? (
          <Skeleton borderRadius={4} className="h-4.5 w-10!" />
        ) : (
          String(payment.card.cvv).replace(/\d$/, "X")
        )}
      </span>
    </div>
  );
};

export default CreditCardCvv;
