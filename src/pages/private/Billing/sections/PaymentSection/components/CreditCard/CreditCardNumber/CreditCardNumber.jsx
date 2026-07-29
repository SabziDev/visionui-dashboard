import Skeleton from "react-loading-skeleton";

const CreditCardNumber = ({ payment, isPending }) => {
  return (
    <span className="text-2xl font-bold">
      {isPending ? (
        <Skeleton borderRadius={4} className="h-6 w-60!" />
      ) : (
        String(payment.card.cardNumber)
          .replaceAll(/\d{4}(?=\d{4})/g, "$& ")
          .replace(/\d{4}$/, "XXXX")
      )}
    </span>
  );
};

export default CreditCardNumber;
