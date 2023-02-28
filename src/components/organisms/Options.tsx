import React, { FC } from "react";
import ScoopOptions from "../organisms/ScoopOptions";
import { useAxios } from "hooks/useAxios";

type Props = {
  optionsType: string;
};

const Options: FC<Props> = ({ optionsType = "scoops" }: Props): JSX.Element => {
  const [data] = useAxios<IMG>(optionsType);

  return (
    <div>
      {data.map(
        ({ name, path }: IMG): JSX.Element => (
          <ScoopOptions key={name} name={name} path={path} />
        )
      )}
    </div>
  );
};

export default Options;
