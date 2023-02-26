import React, { FC, useCallback, useEffect, useState } from "react";
import ScoopOptions from "../organisms/ScoopOptions";

type Props = {
  optionsType: string;
};

type IMG = { name: string; path: string };
const Options: FC<Props> = ({ optionsType = "scoops" }: Props): any => {
  const [data, setData] = useState<Array<IMG>>([{ name: "", path: "" }]);

  const get = useCallback(async () => {
    try {
      const res = await fetch(`http://localhost:5173/${optionsType}`, {
        method: "get",
        headers: new Headers(),
        mode: "cors",
        cache: "default",
      });
      return await res.json();
    } catch (e) {
      console.error(e);
    }
  }, [optionsType]);

  useEffect(() => {
    get()
      .then((r) => {
        if (r !== undefined) setData(r);
        console.log("-> r", r);
      })
      .catch((e) => console.error(e));
  }, [get]);

  return data?.length > 0 ? (
    <div>
      {data?.map((img: IMG) => (
        <ScoopOptions key={img?.name} name={img?.name} path={img?.path} />
      ))}
    </div>
  ) : null;
};

export default Options;
