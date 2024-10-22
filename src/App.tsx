// ** Layout Imports
import AppShellLayout from './layout';

// ** Component Imports
import DataGrid from './components/data-grid/table';
import SearchBar from './components/search-bar/search-bar';

// ** Column Defs
import tableColumnsDefs from './components/data-grid/table-columns-defs';

// ** Hook Imports
import useGetData from './lib/hooks/useGetData';
import useSearch from './lib/hooks/useSearch';

export default function App() {
  const { filters, onFilterChange } = useSearch();
  const { data, loading, revalidateData } = useGetData();

  return (
    <AppShellLayout>
      <div className="app-content">
        <SearchBar
          filters={filters}
          onFilterChange={onFilterChange}
          onSubmit={() => revalidateData(filters)}
        />
        <DataGrid data={data} columns={tableColumnsDefs} isLoading={loading} />
      </div>
    </AppShellLayout>
  );
}
