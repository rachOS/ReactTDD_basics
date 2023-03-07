import React, { ChangeEvent } from "react";

type Props = {
  name: string;
  path: string;
  handleChange(e: ChangeEvent<HTMLInputElement>): void;
};

const ToppingOptions = ({ name, path, handleChange }: Props) => {
  return <img key={name} alt={`${name} topping`} src={path} />;
};

export default ToppingOptions;
