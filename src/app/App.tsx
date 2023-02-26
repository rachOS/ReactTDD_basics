import { FC } from "react";
import styles from "./app.module.css";
import { SummaryForm } from "components/molecules";
import Orders from "components/pages/Orders";

const App: FC = (): JSX.Element => {
  return (
    <main className={styles.main}>
      <Orders type={"test"} />
      <SummaryForm />
    </main>
  );
};

export default App;
