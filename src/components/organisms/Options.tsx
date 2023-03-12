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
  const [scoops, setScoops] = useState<Map<string, string>>(new Map());
  const r: any[] = [];
  scoops.forEach((v, k) => {
    r.push(Number(v));
  });

  const [toppingsTotal, setToppingsTotal] = useState<string>("0.00");
  const isScoops = optionsType === "scoops";
  const price: any = { scoops: 2.0, toppings: 1.5 };

  const handleChange = useCallback(
    ({ target: { name, value } }: ChangeEvent<HTMLInputElement>) => {
      if (isScoops) {
        setScoops((prev) => prev.set(name, value));
      }

      setToppingsTotal((prevState) =>
        (Number(prevState) + Number(value)).toString()
      );
    },
    [isScoops]
  );

  const ItemOptions = isScoops ? ScoopOptions : ToppingOptions;
  const w =
    r.reduce((a, b) => {
      console.log("-> a + b", { a, b });
      return a + b;
    }, 0) * price[optionsType];

  return (
    <div>
      {isScoops ? (
        <span>Scoops total : ${w.toFixed(2).toString()}</span>
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
