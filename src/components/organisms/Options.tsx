import React, { ChangeEvent, FC, useCallback, useState } from "react";
import ScoopOptions from "../organisms/ScoopOptions";
import { useAxios } from "hooks/useAxios";
import ToppingOptions from "../organisms/ToppingOptions";
import "./style.module.css";

type Props = {
  optionsType: string;
};

const Options: FC<Props> = ({ optionsType = "scoops" }: Props): JSX.Element => {
  const [data, error] = useAxios<IMG>(`http://localhost:5173/${optionsType}`);
  const [scoopsTotal, setScoopsTotal] = useState<string>("0.00");
  const [toppingsTotal, setToppingsTotal] = useState<string>("0.00");
  const isScoops = optionsType === "scoops";

  const handleChange = useCallback(
    ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
      if (isScoops) {
        setScoopsTotal((prevState) =>
          (Number(prevState) + Number(value)).toString()
        );
      }

      setToppingsTotal((prevState) =>
        (Number(prevState) + Number(value)).toString()
      );
    },
    [isScoops]
  );

  const ItemOptions = isScoops ? ScoopOptions : ToppingOptions;

  return (
    <div>
      {isScoops ? (
        <span>Scoops total : ${(parseInt(scoopsTotal) * 2).toFixed(2)}</span>
      ) : (
        <span>
          Toppings total : ${(parseInt(toppingsTotal) * 1.5).toFixed(2)}
        </span>
      )}
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
