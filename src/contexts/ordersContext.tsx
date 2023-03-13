import React, {
  createContext,
  ReactNode,
  useContext,
  useMemo,
  useState,
} from "react";

const OrderDetailsContext: React.Context<{
  total: { scoops: string; toppings: string; grandTotal: string };
  prices: any;
  handleSetTotal(key: "scoops" | "toppings", price: string): void;
}> = createContext({
  total: {
    scoops: "0.00",
    toppings: "0.00",
    grandTotal: "0.00",
  },
  prices: { scoops: "2.0", toppings: "1.5" },
  handleSetTotal: (key: "scoops" | "toppings", price: string) => {},
});

export const useOrderDetailsContext = () => {
  const context = useContext(OrderDetailsContext);

  if (!context) {
    throw Error("no orders context found");
  }

  return context;
};

const prices: { scoops: string; toppings: string } = {
  scoops: "2.0",
  toppings: "1.5",
};
export const OrderDetailsProvider = ({ children }: { children: ReactNode }) => {
  const [total, setTotal] = useState<{
    scoops: string;
    toppings: string;
    grandTotal: string;
  }>({
    scoops: "0.00",
    toppings: "0.00",
    grandTotal: "0.00",
  });

  const handleSetTotal = (key: "scoops" | "toppings", price: string): void => {
    console.log("-> handleSetTotal ", { key, price });
    setTotal((prevState) => ({ ...prevState, [key]: price }));
  };

  const values = useMemo(
    () => ({
      total,
      prices,
      handleSetTotal,
    }),
    [total]
  );

  return (
    <OrderDetailsContext.Provider value={values}>
      {children}
    </OrderDetailsContext.Provider>
  );
};
