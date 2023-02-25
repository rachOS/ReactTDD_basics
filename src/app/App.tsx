import { FC } from "react";
import Button from "components/atoms/button";
import styles from "./app.module.css";

const App: FC = (): JSX.Element => {
  return (
    <main className={styles.main}>
      <Button />
    </main>
  );
};

export default App;
