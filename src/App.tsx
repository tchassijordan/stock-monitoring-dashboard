// ** React Imports
import { useState } from 'react';

// ** Layout Imports
import AppShellLayout from './layout';

// ** Component Imports
import DataGrid from './components/data-grid/table';
import SearchBar from './components/search-bar/search-bar';

// ** Column Defs
import tableColumnsDefs from './components/data-grid/table-columns-defs';

// ** Hook Imports
import useGetData from './lib/hooks/useGetData';

export default function App() {
  const [query, setQuery] = useState('');

  const { data, loading } = useGetData(query);

  return (
    <AppShellLayout>
      <div className="app-content">
        <SearchBar
          query={query}
          onInputChange={(query) => setQuery(query)}
          onClear={() => setQuery('')}
        />
        <DataGrid data={data} columns={tableColumnsDefs} isLoading={loading} />
      </div>
    </AppShellLayout>
  );
}
