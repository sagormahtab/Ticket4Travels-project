import React, { createContext, useContext, useState } from "react";

const HotelContext = createContext();

export function useHotel() {
  return useContext(HotelContext);
}

export function HotelProvider({ children }) {
  const [hotel, setHotel] = useState(null);

  return (
    <HotelContext.Provider value={{ hotel, setHotel }}>
      {children}
    </HotelContext.Provider>
  );
}
