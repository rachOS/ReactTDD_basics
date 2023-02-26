import { Button } from "components/atoms/buttons";
import { ChangeEvent, useState } from "react";
import btnStyle from "../atoms/buttons/button.module.css";
import summaryStyle from "./summaryform.module.css";

const SummaryForm = () => {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [showPopover, setShowPopover] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void =>
    setIsChecked(e.target.checked);

  const handleMouseOver = () => setShowPopover((prevState) => !prevState);
  return (
    <>
      <Button
        label={"Order"}
        className={btnStyle.button}
        isDisabled={!isChecked}
      />
      <label
        htmlFor={"confirm-order-checkbox"}
        className={summaryStyle.label}
        onMouseEnter={handleMouseOver}
        onMouseLeave={handleMouseOver}
      >
        You must accept condition before ordering
        <input
          id={"confirm-order-checkbox"}
          type={"checkbox"}
          onChange={handleChange}
          checked={isChecked}
        />
      </label>
      {showPopover ? <span role={"tooltip"}>popover</span> : null}
    </>
  );
};

export default SummaryForm;
