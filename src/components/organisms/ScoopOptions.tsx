import React, { FC } from "react";

type Props = {
  name: string;
  path: string;
};

const ScoopOptions: FC<Props> = ({ name, path }: Props): JSX.Element => {
  return <img key={name} alt={`${name} scoop`} src={path} />;
};

export default ScoopOptions;
