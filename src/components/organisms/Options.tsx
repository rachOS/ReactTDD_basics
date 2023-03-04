import React, { FC } from "react";
import ScoopOptions from "../organisms/ScoopOptions";
import { useAxios } from "hooks/useAxios";
import ToppingOptions from "../organisms/ToppingOptions";

type Props = {
  optionsType: string;
};

const Options: FC<Props> = ({ optionsType = "scoops" }: Props): JSX.Element => {
  const [data, error] = useAxios<IMG>(optionsType);

  const ItemOptions = optionsType === "scoops" ? ScoopOptions : ToppingOptions;

  if (error) {
    return (
      <img onLoad={() => alert("there is an error")} alt={"alert error"} />
    );
  } else {
    return (
      <div>
        {data.map(
          ({ name, path }: IMG): JSX.Element => (
            <ItemOptions key={name} name={name} path={path} />
          )
        )}
      </div>
    );
  }
};

export default Options;
