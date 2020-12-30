import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }) {
  const [cart, setCart] = useState({
    _id: "5f9b088c341aec0718f7fb8b",
    AC: false,
    startingPoints: ["Dhaka"],
    endingPoints: ["Chittagong"],
    seats: [
      "A1",
      "A2",
      "A3",
      "A4",
      "B1",
      "B2",
      "B3",
      "B4",
      "C1",
      "C2",
      "C3",
      "C4",
    ],
    seat: 32,
    depTime: "2020-11-17T04:30:33.875Z",
    arrTime: "2020-11-17T14:50:33.875Z",
    depDate: [],
    name: "Hanif Enterprise",
    model: "Hyu T8",
    from: "Dhaka",
    to: "Chittagong",
    fare: 350,
    bookedSeats: ["A3", "B2"],
    bookedSeatNum: 0,
    goingToBook: ["A1"],
    boardingPoint: "Dhaka",
  });

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
}
