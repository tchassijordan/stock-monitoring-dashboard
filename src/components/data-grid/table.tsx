// ** Tanstack Table Imports
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  SortDirection,
  useReactTable,
} from '@tanstack/react-table';

// ** Types
import { IStock } from '../../lib/types';

// ** Styles
import './table.scss';

interface IDataGrid {
  data: IStock[];
  columns: ColumnDef<IStock, string | number>[];
  isLoading?: boolean;
}

const DataGrid = ({ data, columns, isLoading }: IDataGrid) => {
  //Create table instance
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  if (isLoading) return <Spinner />;

  return (
    <div className="table-container">
      <table className="table">
        <thead className="table-header">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id} className="table-row">
              {headerGroup.headers.map((header) => (
                <th key={header.id} className="table-head">
                  <div
                    className="table-head-button"
                    style={{ minWidth: header.getSize() }}
                    onClick={header.column.getToggleSortingHandler()}
                    tabIndex={1}
                    role="button"
                  >
                    <div>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext(),
                          )}
                    </div>
                    {header.column.getIsSorted()
                      ? getSortIcon(header.column.getIsSorted())
                      : null}
                  </div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody className="table-body">
          {table.getRowModel().rows.length ? (
            table.getRowModel().rows.map((row) => (
              <tr key={row.id} className="table-row">
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className="table-cell">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <tr className="table-row">
              <td colSpan={columns.length} className="table-cell">
                No data
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

const Spinner = () => {
  return (
    <div className="table-spinner-container">
      <p>Loading table data</p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="table-spinner__rotate"
      >
        <path d="M21 12a9 9 0 1 1-6.219-8.56" />
      </svg>
    </div>
  );
};

const getSortIcon = (sortOrder: SortDirection | false) => {
  if (!sortOrder) return null;

  const Icon = sortOrder === 'asc' ? ArrowUp : ArrowDown;

  return <Icon />;
};

const ArrowUp = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m5 12 7-7 7 7" />
    <path d="M12 19V5" />
  </svg>
);

const ArrowDown = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 5v14" />
    <path d="m19 12-7 7-7-7" />
  </svg>
);

export default DataGrid;
