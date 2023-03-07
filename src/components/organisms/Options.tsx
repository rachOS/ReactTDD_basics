import React, { ChangeEvent, FC, useCallback, useState } from "react";
import ScoopOptions from "../organisms/ScoopOptions";
import { useAxios } from "hooks/useAxios";
import ToppingOptions from "../organisms/ToppingOptions";

type Props = {
  optionsType: string;
};

const Options: FC<Props> = ({ optionsType = "scoops" }: Props): JSX.Element => {
  const [data, error] = useAxios<IMG>(`http://localhost:5173/${optionsType}`);
  const [scoopsTotal, setScoopsTotal] = useState<string>("0.00");

  const handleChange = useCallback(
    ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
      console.log("-> value", value);
      setScoopsTotal(value);
    },
    []
  );

  const ItemOptions = optionsType === "scoops" ? ScoopOptions : ToppingOptions;

  return (
    <div>
      <span>Scoops total : ${scoopsTotal}</span>
      {error ? (
        <div role={"alert"}>{error.message}</div>
      ) : (
        data?.map(
          ({ name, path }: IMG): JSX.Element => (
            <ItemOptions
              key={name}
              name={name}
              path={path}
              handleChange={handleChange}
            />
          )
        )
      )}
    </div>
  );
};

export default Options;
