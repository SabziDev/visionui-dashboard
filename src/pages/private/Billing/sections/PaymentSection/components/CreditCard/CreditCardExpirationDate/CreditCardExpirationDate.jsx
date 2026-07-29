import Skeleton from "react-loading-skeleton";

const CreditCardExpirationDate = ({ payment, isPending }) => {
  return (
    <div className="flex flex-col">
      <span className="text-xs">VALID THRU</span>
      <span className="font-VazirBold text-sm">
        {isPending ? (
          <Skeleton borderRadius={4} className="h-4.5 w-16!" />
        ) : (
          payment.card.expirationDate
        )}
      </span>
    </div>
  );
};

export default CreditCardExpirationDate;
