import { useEffect, useState } from "react";
import axios from "axios";

export const useAxios = <Type = Array<unknown>>(
  optionsType: string
): Array<Type>[] => {
  const [data, setData] = useState<Array<Type>>([]);

  useEffect(() => {
    try {
      axios
        .get(`http://localhost:5173/${optionsType}`)
        .then((r): void => setData(r.data));
    } catch (e) {
      console.error(e);
    }
  }, []);

  return [data];
};
