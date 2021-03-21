import React, { createContext, useContext, useState } from "react";

const HotelContext = createContext();

export function useHotel() {
  return useContext(HotelContext);
}

export function HotelProvider({ children }) {
  const [hotel, setHotel] = useState({
    city: "Dhaka",
    checkin: "2020-12-20T04:30:33.875Z",
    checkout: "2020-12-21T04:30:33.875Z",
    adult: 2,
    child: 1,
    room: 1,
  });

  return (
    <HotelContext.Provider value={{ hotel, setHotel }}>
      {children}
    </HotelContext.Provider>
  );
}
