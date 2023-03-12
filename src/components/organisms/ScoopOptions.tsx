import React, { ChangeEvent, FC } from "react";

type Props = {
  name: string;
  path: string;
  value: string;
  handleChange(e: ChangeEvent<HTMLInputElement>): void;
};

const ScoopOptions: FC<Props> = ({
  name,
  path,
  handleChange,
  value = "0",
}: Props): JSX.Element => {
  return (
    <>
      <img key={name} alt={`${name} scoop`} src={path} />
      <label htmlFor={name}>
        {name}
        <input
          id={name}
          name={name}
          type={"number"}
          onChange={handleChange}
          value={value}
          min={0}
        />
      </label>
    </>
  );
};

export default ScoopOptions;
