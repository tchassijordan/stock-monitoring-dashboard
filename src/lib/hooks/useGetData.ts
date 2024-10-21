import { useEffect, useState } from 'react';
import { IStock } from '../types';

function useGetData(query?: string) {
  const [data, setData] = useState<IStock[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const PORT = 8080;

      try {
        setLoading(true);
        const response = await fetch(
          `http://localhost:${PORT}/api/data/?q=${query}`,
        );
        let responseData = await response.json();

        setData(responseData);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [query]);

  return {
    data,
    loading,
  };
}

export default useGetData;
