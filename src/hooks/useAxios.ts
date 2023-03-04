import { useCallback, useEffect, useState } from "react";
import axios from "axios";

export const useAxios = <Type = Array<unknown>>(
  optionsType: string
): [data: Array<Type>, error: boolean] => {
  const [data, setData] = useState<Array<Type>>([]);
  const [error, setError] = useState<boolean>(false);

  const get = useCallback(async () => {
    try {
      const response = await axios.get(`http://localhost:5173/${optionsType}`);
      await setData(response.data);
    } catch (e) {
      setError(true);
    }
  }, [optionsType]);

  useEffect(() => {
    get().then((r): void => r);
  }, [get]);

  return [data, error];
};
