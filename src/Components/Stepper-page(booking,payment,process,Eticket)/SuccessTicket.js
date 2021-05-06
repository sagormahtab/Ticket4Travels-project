import React from "react";
import { useBusCart } from "../../BusCartContext.js";

const SuccessTicket = () => {
  const { busCart } = useBusCart();
  return (
    <div className="text-center">
      <h1>Your payment was successfull!</h1>
      <p>Your payment id is: {busCart.paymentId}</p>
    </div>
  );
};

export default SuccessTicket;
