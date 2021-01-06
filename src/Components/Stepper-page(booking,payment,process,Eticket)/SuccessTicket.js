import React from "react";
import { useCart } from "../../CartContext.js";

const SuccessTicket = () => {
  const { cart } = useCart();
  return (
    <div className="text-center">
      <h1>Your payment was successfull!</h1>
      <p>Your payment id is: {cart.paymentId}</p>
    </div>
  );
};

export default SuccessTicket;
