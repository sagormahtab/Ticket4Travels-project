import React, { useState, useEffect } from "react";
import {
  useStripe,
  useElements,
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement,
} from "@stripe/react-stripe-js";
import "./creditCard.css";
import Button from "@material-ui/core/Button";
import axios from "axios";
import { useBusCart } from "../../../../BusCartContext";
import { useHotelCart } from "../../../../Context/HotelCartContext";

const ELEMENT_OPTIONS = {
  style: {
    base: {
      fontSize: "1rem",
      color: "#495057",
      backgroundColor: "#fff",
      border: "1px solid #ced4da",
      borderRadius: ".25rem",
      fontWeight: "400",
      letterSpacing: "0.025em",
      "::placeholder": {
        color: "#aab7c4",
      },
    },
    invalid: {
      color: "#9e2146",
    },
  },
};

const CreditCard = ({ handleBack, handleNext }) => {
  const elements = useElements();
  const stripe = useStripe();
  const [errorMessage, setErrorMessage] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { busCart, setBusCart } = useBusCart();
  const { hotelCart, setHotelCart } = useHotelCart();
  let name;
  let email;
  let phone;

  if (busCart) {
    name = busCart.passenger.name;
    email = busCart.passenger.email;
    phone = busCart.passenger.phone;
  }

  if (hotelCart) {
    name = hotelCart.passenger.name;
    email = hotelCart.passenger.email;
    phone = hotelCart.passenger.phone;
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    const billingDetails = {
      name,
      email,
      phone,
    };

    const cardElement = elements.getElement(CardNumberElement);
    setIsLoading(true);

    const payload = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
      billing_details: billingDetails,
    });

    if (payload.error) {
      setErrorMessage(payload.error.message);
      setPaymentMethod(null);
      setIsLoading(false);
    } else {
      setPaymentMethod(payload.paymentMethod);
      if (busCart) {
        setBusCart({
          ...busCart,
          paymentId: payload.paymentMethod.id,
        });
      }

      if (hotelCart) {
        setHotelCart({
          ...hotelCart,
          paymentId: payload.paymentMethod.id,
        });
      }
      setErrorMessage(null);
    }
  };

  const sendToServer = async () => {
    try {
      setIsLoading(true);
      const { id } = paymentMethod;
      let response;
      if (hotelCart) {
        response = await axios.post(
          "https://hotel-api-sm.herokuapp.com/api/v1/bookings/checkout-session",
          {
            product: busCart,
            id: id,
          }
        );
      }

      if (busCart) {
        response = await axios.post(
          "https://bus-api-sm.herokuapp.com/api/v1/bookings/checkout-session",
          {
            product: busCart,
            id: id,
          }
        );
      }

      if (response.data.success) {
        handleNext();
      }
    } catch (error) {
      setErrorMessage(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (paymentMethod) {
      sendToServer();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paymentMethod]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="cardNumber">Card Number</label>
        <CardNumberElement id="cardNumber" options={ELEMENT_OPTIONS} />
        <label htmlFor="expiry">Card Expiration</label>
        <CardExpiryElement id="expiry" options={ELEMENT_OPTIONS} />
        <label htmlFor="cvc">CVC</label>
        <CardCvcElement id="cvc" options={ELEMENT_OPTIONS} />
        {errorMessage && <p className="text-danger">{errorMessage}</p>}
        <div className="text-center">
          <Button onClick={handleBack} className="mt-5 mr-3">
            Back
          </Button>

          <Button
            variant="contained"
            color="primary"
            className="mt-5 px-5"
            disabled={!stripe || isLoading}
            type="submit"
          >
            {isLoading ? "Processing" : "Pay"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CreditCard;
