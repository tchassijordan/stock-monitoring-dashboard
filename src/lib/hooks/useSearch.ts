import { useState } from 'react';

export interface ISearchFilters {
  query: string;
  percentageChange: number;
  price: number;
}

const useSearch = () => {
  const [filters, setFilters] = useState<ISearchFilters>({
    query: '',
    percentageChange: 0,
    price: 0,
  });

  const onFilterChange = (
    key: keyof ISearchFilters,
    value: number | string,
  ) => {
    setFilters({
      ...filters,
      [key]: value,
    });
  };

  return { filters, onFilterChange };
};

export default useSearch;