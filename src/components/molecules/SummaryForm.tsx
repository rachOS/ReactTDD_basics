import { Button } from "components/atoms/buttons";
import { ChangeEvent, useState } from "react";
import btnStyle from "../atoms/buttons/button.module.css";
import summaryStyle from "./summaryform.module.css";

const SummaryForm = () => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void =>
    setIsChecked(e.target.checked);

  return (
    <>
      <Button
        label={"Order"}
        className={btnStyle.button}
        isDisabled={!isChecked}
      />
      <label htmlFor={"confirm-order-checkbox"} className={summaryStyle.label}>
        Confirm order
        <input
          id={"confirm-order-checkbox"}
          type={"checkbox"}
          onChange={handleChange}
          checked={isChecked}
        />
      </label>
    </>
  );
};

export default SummaryForm;
