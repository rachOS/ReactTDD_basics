import React from "react";

type Props = {
  name: string;
  path: string;
};

const ToppingOptions = ({ name, path }: Props) => {
  return <img key={name} alt={`${name} topping`} src={path} />;
};

export default ToppingOptions;
