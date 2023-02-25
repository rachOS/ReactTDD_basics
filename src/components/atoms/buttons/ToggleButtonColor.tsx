import { Button } from "components/atoms/buttons";
import { ChangeEvent, useEffect, useMemo, useState } from "react";

const ToggleButtonColor = () => {
  const initialState = useMemo(() => {
    return {
      label: "click to render blue",
      className: "btn-bg-red",
      isToogled: false,
    };
  }, []);

  const [label, setLabel] = useState(initialState.label);
  const [className, setClassName] = useState(initialState.className);
  const [toggle, setToggle] = useState(initialState.isToogled);
  const [isDisabled, setIsDisabled] = useState(false);

  const handleClick = (): void =>
    setToggle((prevState: boolean): boolean => !prevState);

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void =>
    setIsDisabled(e.target.checked);

  useEffect(() => {
    if (toggle) {
      setLabel("click to render red");
      setClassName("btn-bg-blue");
    } else {
      setLabel(initialState.label);
      setClassName(initialState.className);
    }
  }, [initialState, toggle]);

  return (
    <>
      <Button
        className={className}
        label={label}
        handleClick={handleClick}
        isDisabled={isDisabled}
      />

      <label htmlFor={"disable-button-checkbox"}>Disable button</label>
      <input
        id={"disable-button-checkbox"}
        type={"checkbox"}
        onChange={handleChange}
      />
    </>
  );
};

export default ToggleButtonColor;
