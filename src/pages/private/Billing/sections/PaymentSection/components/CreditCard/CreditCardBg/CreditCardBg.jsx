const CreditCardBg = () => {
  return (
    <>
      <img
        src="/images/shapes/pages/private/billing/card-bg.webp"
        alt="card bg"
        className="absolute inset-0"
      />
      <span className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.03)_25%,transparent_25%,transparent_75%,rgba(255,255,255,0.03)_75%),linear-gradient(45deg,rgba(255,255,255,0.03)_25%,transparent_25%,transparent_75%,rgba(255,255,255,0.03)_75%)] bg-size-[20px_20px] bg-position-[0_0,10px_10px]" />
    </>
  );
};

export default CreditCardBg;
