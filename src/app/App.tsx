import React, { FC } from "react";
import styles from "./app.module.css";
import { SummaryForm } from "components/molecules";
import Orders from "components/pages/Orders";
import { OrderDetailsProvider } from "../contexts/ordersContext";
import OrderEntry from "components/organisms/OrderEntry";

const App: FC = (): JSX.Element => {
  return (
    <main className={styles.main}>
      <OrderDetailsProvider>
        <OrderEntry />
        <SummaryForm />
      </OrderDetailsProvider>
    </main>
  );
};

export default App;
