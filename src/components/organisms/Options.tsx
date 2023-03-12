import React, { ChangeEvent, FC, useCallback, useMemo, useState } from "react";
import ScoopOptions from "../organisms/ScoopOptions";
import { useAxios } from "hooks/useAxios";
import ToppingOptions from "../organisms/ToppingOptions";
import "./style.module.css";

type Props = {
  optionsType: string;
};

const Options: FC<Props> = ({ optionsType = "scoops" }: Props): JSX.Element => {
  const [data, error] = useAxios<IMG>(`http://localhost:5173/${optionsType}`);
  const [scoops, setScoops] = useState<Map<string, number>>(new Map());
  const price: any = useMemo(() => ({ scoops: 2.0, toppings: 1.5 }), []);

  const [toppingsTotal, setToppingsTotal] = useState<string>("0.00");
  const isScoops = optionsType === "scoops";

  const [form, setForm] = useState<{ [key: string]: string }>({});
  const handleChange = useCallback(
    ({ target: { name, value } }: ChangeEvent<HTMLInputElement>) => {
      if (isScoops) {
        setForm((prevForm) => ({ ...prevForm, [name]: value }));
        setScoops((prevScoops) => prevScoops.set(name, Number(value)));
      }

      setToppingsTotal((prevState) =>
        (Number(prevState) + Number(value)).toString()
      );
    },
    [isScoops, price, optionsType]
  );

  const ItemOptions = isScoops ? ScoopOptions : ToppingOptions;

  const calcScoopTotal = useCallback((): number => {
    const tmp: Array<number> = [];
    scoops.forEach((v, k) => {
      // console.log("-> v", { v, k });
      tmp.push(v);
    });
    /*console.log("-> tmp", {
                      tmp,
                      reduce: tmp.reduce((a, b) => a + b, 0) * price[optionsType],
                    });*/
    return tmp.reduce((a, b) => a + b, 0) * price[optionsType];
  }, [price, optionsType, scoops]);

  return (
    <div>
      {isScoops ? (
        <span>Scoops total : ${calcScoopTotal().toFixed(2)}</span>
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
              value={form[name]}
            />
          )
        )
      )}
    </div>
  );
};

export default Options;
