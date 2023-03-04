import React, {FC} from "react";
import ScoopOptions from "../organisms/ScoopOptions";
import {useAxios} from "hooks/useAxios";
import ToppingOptions from "components/organisms/ToppingOptions";

type Props = {
  optionsType: string;
};

const Options: FC<Props> = ({optionsType = "scoops"}: Props): JSX.Element => {
  const [data] = useAxios<IMG>(optionsType);

  const ItemOptions = optionsType === "scoops" ? ScoopOptions : ToppingOptions;

  return (
      <div>
        {data.map(
            ({name, path}: IMG): JSX.Element => (
                <ItemOptions key={name} name={name} path={path}/>
            )
        )}
      </div>
  );
};

export default Options;
