import { ISearchFilters } from '../../lib/hooks/useSearch';
import './search-bar.scss';
import Select from './Select/select';

interface ISearchBarProps {
  filters?: ISearchFilters;
  onFilterChange?: (key: keyof ISearchFilters, value: number | string) => void;
  onSubmit?: () => void;
  onReset?: () => void;
}

const SearchBar = (props: ISearchBarProps) => {
  const { onFilterChange, onSubmit, onReset, filters } = props;
  const { query, percentageChange, price } = filters || {};

  return (
    <div className="search-filters-container">
      <div className="search-bar">
        <input
          type="text"
          value={query}
          onChange={(e) => onFilterChange?.('query', e.target.value)}
          placeholder="Search for symbol, name"
          className="search-input"
        />
        <button onClick={onSubmit} className="search-button">
          Search
        </button>
        <button onClick={onReset} className="reset-button">
          Reset
        </button>
      </div>
      <div className="search-filters-select-container">
        <Select
          title="Percentage Change"
          value={percentageChange || ''}
          options={PERCENTAGE_CHANGE_OPTIONS}
          onSelect={(value) => onFilterChange?.('percentageChange', value)}
        />
        <Select
          title="Price"
          value={price || ''}
          options={PRICE_FILTER_OPTIONS}
          onSelect={(value) => onFilterChange?.('price', value)}
        />
      </div>
    </div>
  );
};

const PERCENTAGE_CHANGE_OPTIONS = [
  {
    value: -5,
    label: 'Less than -5%',
  },
  {
    value: -1,
    label: 'Less than -1%',
  },
  {
    value: -0.5,
    label: 'Less than -0.5%',
  },
  {
    value: -0.25,
    label: 'Less than -0.25%',
  },
  {
    value: 1,
    label: 'Less than 1%',
  },
  {
    value: 5,
    label: 'Less than 5%',
  },
  {
    value: 10,
    label: 'Less than 10%',
  },
  {
    value: 20,
    label: 'Less than 20%',
  },
];

const PRICE_FILTER_OPTIONS = [
  {
    value: 35,
    label: 'Less than $35',
  },
  {
    value: 50,
    label: 'Less than $50',
  },
  {
    value: 75,
    label: 'Less than $75',
  },
  {
    value: 100,
    label: 'Less than $100',
  },
  {
    value: 200,
    label: 'Less than $200',
  },
  {
    value: 350,
    label: 'Less than $350',
  },
];

export default SearchBar;
