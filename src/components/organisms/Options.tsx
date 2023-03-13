import React, {
  ChangeEvent,
  FC,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import ScoopOptions from "../organisms/ScoopOptions";
import {useAxios} from "hooks/useAxios";
import ToppingOptions from "../organisms/ToppingOptions";
import "./style.module.css";
import {useOrderDetailsContext} from "../../contexts/ordersContext";

type Props = {
  optionsType: string;
};

const Options: FC<Props> = ({optionsType = "scoops"}: Props): JSX.Element => {
  const [data, error] = useAxios<IMG>(`http://localhost:5173/${optionsType}`);
  const [scoops, setScoops] = useState<Map<string, number>>(new Map());
  const [toppingsTotal, setToppingsTotal] = useState<string>("0.00");
  const [form, setForm] = useState<{ [key: string]: string }>({});

  const {prices, handleSetTotal} = useOrderDetailsContext();

  const isScoops = optionsType === "scoops";

  const handleChange = useCallback(
      ({target: {name, value}}: ChangeEvent<HTMLInputElement>) => {
        setForm((prevForm) => ({...prevForm, [name]: value}));

        if (isScoops) {
          setScoops((prevScoops) => prevScoops.set(name, Number(value)));
        }

        setToppingsTotal((prevState) =>
            (Number(prevState) + Number(value)).toString()
        );
      },
      [isScoops, prices]
  );

  const ItemOptions = isScoops ? ScoopOptions : ToppingOptions;

  const calcScoopTotal = useCallback((): number => {
    const tmp: Array<number> = [];
    scoops.forEach((v: number): void => {
      tmp.push(v);
    });

    return tmp.reduce((a, b) => a + b, 0) * prices[optionsType];
  }, [prices, optionsType, scoops]);

  const formatCurrencyHelper = (currency: number | bigint) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
    }).format(currency);
  };

  useEffect(
      () => handleSetTotal("scoops", formatCurrencyHelper(calcScoopTotal())),
      [calcScoopTotal, form]
  );

  return (
      <div>
        {error ? (
            <div role={"alert"}>{error.message}</div>
        ) : (
            data?.map(
                ({name, path}: IMG): JSX.Element => (
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
