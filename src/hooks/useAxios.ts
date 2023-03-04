import { useCallback, useEffect, useState } from "react";
import axios from "axios";

export const useAxios = <Type = Array<unknown>>(
  url: string
): [data: Array<Type>, error: boolean] => {
  const [data, setData] = useState<Array<Type>>([]);
  const [error, setError] = useState<boolean>(false);

  const getData = useCallback(async (): Promise<void> => {
    try {
      const response = await axios.get(url);
      await setData(response.data);
    } catch (e) {
      setError(true);
    }
  }, [url]);

  useEffect(() => {
    getData().then((r): void => r);
  }, [getData]);

  return [data, error];
};
