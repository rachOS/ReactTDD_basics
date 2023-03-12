import React, {
  createContext,
  ReactNode,
  useContext,
  useMemo,
  useState,
} from "react";

const OrderDetailsContext: React.Context<{
  handleUpdateForm: (name: string, value: string) => void;
  form: { [key: string]: string };
  prices: { [key: string]: number };
}> = createContext({
  form: {},
  prices: {},
  handleUpdateForm: (name: string, value: string) =>
    console.info({ name, value }),
});

export const useOrderDetailsContext = () => {
  const context = useContext(OrderDetailsContext);

  if (!context) {
    throw Error("no orders context found");
  }

  return context;
};

export const OrderDetailsProvider = ({ children }: { children: ReactNode }) => {
  const [form, setForm] = useState<{ [key: string]: string }>({});
  const handleUpdateForm = (name: string, value: string) =>
    setForm((prevForm) => ({ ...prevForm, [name]: value }));

  const values = useMemo(
    () => ({
      form,
      prices: { scoops: 2.0, toppings: 1.5 },
      handleUpdateForm,
    }),
    []
  );
  return (
    <OrderDetailsContext.Provider value={values}>
      {children}
    </OrderDetailsContext.Provider>
  );
};
