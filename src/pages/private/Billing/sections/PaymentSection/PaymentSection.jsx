import CardBalance from "./components/CardBalance/CardBalance";
import CreditCard from "./components/CreditCard/CreditCard";

const PaymentSection = () => {
  return (
    <section>
      <div className="flex-center flex-col gap-6 xl:flex-row">
        <CreditCard />
        <CardBalance />
      </div>
    </section>
  );
};

export default PaymentSection;
