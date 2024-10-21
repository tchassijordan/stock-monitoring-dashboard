// ** Tanstack Table Imports
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';

// ** Types
import { ITableData } from './types';

// ** Styles
import './table.scss';

interface IDataGrid {
  data: ITableData[];
  columns: ColumnDef<ITableData, string | number>[];
  isLoading?: boolean;
}

const DataGrid = ({ data, columns, isLoading }: IDataGrid) => {
  //Create table instance
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
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
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                      )}
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
      className="spinner--rotate"
    >
      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
    </svg>
  );
};

export default DataGrid;
