import { useEffect, useState } from "react";
import axios, { AxiosError } from "axios";

export const useAxios = <Type = Array<unknown>>(
  url: string
): [data: Array<Type>, error: AxiosError | null] => {
  const [data, setData] = useState<Array<Type>>([]);
  const [error, setError] = useState<AxiosError | null>(null);

  useEffect(() => {
    axios
      .get(url)
      .then((r): void => {
        setData(r.data);
      })
      .catch((e) => setError(e));
  }, [url]);

  return [data, error];
};
