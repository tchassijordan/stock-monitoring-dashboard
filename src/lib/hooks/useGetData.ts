// ** React Imports
import { useCallback, useEffect, useState } from 'react';

// ** Type Imports
import { IStock } from '../types';
import { ISearchFilters } from './useSearch';

function useGetData() {
  const [data, setData] = useState<IStock[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchData = useCallback(async (filters?: ISearchFilters) => {
    const PORT = 8080;

    try {
      setLoading(true);
      const { percentageChange, price, query } = filters || {};
      const queryStr = query ? `q=${query}` : '';
      const percentageChangeStr = percentageChange
        ? `&percentage_change=${percentageChange}`
        : '';
      const priceStr = price ? `&price=${price}` : '';
      const searchParamsStr = filters
        ? `?${queryStr}${percentageChangeStr}${priceStr}`
        : '';

      const response = await fetch(
        `http://localhost:${PORT}/api/data/${searchParamsStr}`,
      );
      let responseData = await response.json();

      setData(responseData);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(
    function runInitialFetch() {
      fetchData();
    },
    [fetchData],
  );

  return {
    data,
    loading,
    revalidateData: fetchData,
  };
}

export default useGetData;
