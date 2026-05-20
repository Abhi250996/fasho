import React, { createContext, useContext, useState } from "react";

const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
  const [order, setOrder] = useState(null);

  const saveOrder = (orderDetails) => {
    setOrder(orderDetails);
  };

  const clearOrder = () => {
    setOrder(null);
  };

  return (
    <OrderContext.Provider
      value={{
        order,
        saveOrder,
        clearOrder,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};

export const useOrder = () => {
  const context = useContext(OrderContext);

  if (!context) {
    throw new Error("useOrder must be used within an OrderProvider");
  }

  return context;
};
