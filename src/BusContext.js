import React, { createContext, useContext, useState } from "react";

const BusContext = createContext();

export function useBus() {
  return useContext(BusContext);
}

export function BusProvider({ children }) {
  const [bus, setBus] = useState({
    from: "Dhaka",
    to: "Chittagong",
    date: "2020-12-20T04:30:33.875Z",
  });

  return (
    <BusContext.Provider value={{ bus, setBus }}>
      {children}
    </BusContext.Provider>
  );
}
