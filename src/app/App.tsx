import { FC } from "react";
import styles from "./app.module.css";
import { SummaryForm } from "components/molecules";

const App: FC = (): JSX.Element => {
  return (
    <main className={styles.main}>
      <SummaryForm />
    </main>
  );
};

export default App;
