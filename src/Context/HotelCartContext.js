import React, { createContext, useContext, useState } from "react";

const HotelCartContext = createContext();

export function useHotelCart() {
  return useContext(HotelCartContext);
}

export function HotelCartProvider({ children }) {
  const [hotelCart, setHotelCart] = useState(null);
  return (
    <HotelCartContext.Provider value={{ hotelCart, setHotelCart }}>
      {children}
    </HotelCartContext.Provider>
  );
}
