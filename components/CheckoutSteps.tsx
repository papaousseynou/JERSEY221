const CheckoutSteps = ({ current = 0 }) => {
  return (
    <ul className="steps steps-vertical lg:steps-horizontal w-full mt-4">
      {[
        "Utilisateur en ligne",
        "Adresse de livraison",
        "Mode de paiement",
        "Passer la commande",
      ].map((step, index) => (
        <li
          key={step}
          className={`step
               ${index <= current ? "step-primary" : ""}
               `}
        >
          {step}
        </li>
      ))}
    </ul>
  );
};
export default CheckoutSteps;
