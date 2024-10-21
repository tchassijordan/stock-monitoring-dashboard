import './search-bar.scss';

interface ISearchBarProps {
  onSearch?: () => void;
  onInputChange?: (query: string) => void;
  onClear?: () => void;
  query?: string;
}

const SearchBar = (props: ISearchBarProps) => {
  const { onInputChange, onSearch, query } = props;

  return (
    <div className="search-bar">
      <input
        type="text"
        value={query}
        onChange={(e) => onInputChange?.(e.target.value)}
        placeholder="Search..."
        className="search-input"
      />
      <button onClick={onSearch} className="search-button">
        Search
      </button>
    </div>
  );
};

export default SearchBar;
