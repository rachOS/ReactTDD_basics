import { createContext, ReactNode, useContext, useMemo } from "react";

const OrderDetailsContext = createContext({});

export const useOrderDetailsContext = () => {
  const context = useContext(OrderDetailsContext);

  if (!context) {
    throw Error("no orders context found");
  }

  return context;
};

export const OrderDetailsProvider = ({ children }: { children: ReactNode }) => {
  const values = useMemo(() => ({}), []);
  return (
    <OrderDetailsContext.Provider value={values}>
      {children}
    </OrderDetailsContext.Provider>
  );
};
