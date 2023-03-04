import React, { FC } from "react";

type Props = {
  name: string;
  path: string;
};

const ToppingOptions: FC<Props> = ({ name, path }: Props): JSX.Element => {
  return <img key={name} alt={`${name} topping`} src={path} />;
};

export default ToppingOptions;
