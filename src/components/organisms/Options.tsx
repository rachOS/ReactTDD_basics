import React, { FC } from "react";
import ScoopOptions from "../organisms/ScoopOptions";
import { useAxios } from "hooks/useAxios";
import ToppingOptions from "../organisms/ToppingOptions";

type Props = {
  optionsType: string;
};

const Options: FC<Props> = ({ optionsType = "scoops" }: Props): JSX.Element => {
  const [data, error] = useAxios<IMG>(`http://localhost:5173/${optionsType}`);

  const ItemOptions = optionsType === "scoops" ? ScoopOptions : ToppingOptions;

  return (
    <>
      {error ? (
        <div role={"alert"}>{error.message}</div>
      ) : (
        data?.map(
          ({ name, path }: IMG): JSX.Element => (
            <ItemOptions key={name} name={name} path={path} />
          )
        )
      )}
    </>
  );
};

export default Options;
