import { FC } from "react";
import styles from "./app.module.css";
import { ToggleButtonColor } from "components/atoms/buttons";

const App: FC = (): JSX.Element => {
  return (
    <main className={styles.main}>
      <ToggleButtonColor />
    </main>
  );
};

export default App;
