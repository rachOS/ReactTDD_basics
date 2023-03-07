import React, { ChangeEvent, FC } from "react";

type Props = {
  name: string;
  path: string;
  handleChange(e: ChangeEvent<HTMLInputElement>): void;
};

const ScoopOptions: FC<Props> = ({
  name,
  path,
  handleChange,
}: Props): JSX.Element => {
  return (
    <>
      <img key={name} alt={`${name} scoop`} src={path} />
      <label htmlFor={name}>
        {name}
        <input
          id={name}
          type={"number"}
          onChange={handleChange}
          defaultValue={0}
        />
      </label>
    </>
  );
};

export default ScoopOptions;
