// ** React Imports
import { useState } from 'react';

// ** Layout Imports
import AppShellLayout from './layout';

// ** Component Imports
import DataGrid from './components/data-viz/table';
import SearchBar from './components/search-bar/search-bar';

// ** Data
import { mockTableData } from './components/data-viz/constant';

// ** Column Defs
import tableColumnsDefs from './components/data-viz/table-columns-defs';

export default function App() {
  const [query, setQuery] = useState('');

  return (
    <AppShellLayout>
      <div className="app-content">
        <SearchBar
          query={query}
          onInputChange={(query) => setQuery(query)}
          onClear={() => setQuery('')}
        />
        <DataGrid data={mockTableData} columns={tableColumnsDefs} />
      </div>
    </AppShellLayout>
  );
}
