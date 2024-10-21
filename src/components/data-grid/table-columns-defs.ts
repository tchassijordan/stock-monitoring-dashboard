import { ColumnDef } from '@tanstack/react-table';
import { IStock } from '../../lib/types';

const tableColumnsDefs: ColumnDef<IStock, string | number>[] = [
  {
    accessorKey: 'symbol',
    header: 'SYMBOL',
    cell: ({ getValue }) => getValue(),
    sortDescFirst: false,
    minSize: 100,
  },
  {
    accessorKey: 'name',
    header: 'NAME',
    cell: ({ getValue }) => getValue(),
    sortDescFirst: false,
    minSize: 150,
  },
  {
    accessorKey: 'price',
    header: 'PRICE',
    cell: ({ getValue }) => getValue(),
    sortDescFirst: false,
    minSize: 100,
  },
  {
    accessorKey: 'change',
    header: 'CHANGE',
    cell: ({ getValue }) => getValue(),
    sortDescFirst: false,
    minSize: 100,
  },
  {
    accessorKey: 'changePercent',
    header: 'CHANGE %',
    cell: ({ getValue }) => getValue(),
    sortDescFirst: false,
    minSize: 100,
  },
  {
    accessorKey: 'marketCap',
    header: 'MARKET CAP',
    cell: ({ getValue }) => getValue(),
    sortDescFirst: false,
    minSize: 150,
  },
  {
    accessorKey: 'lastUpdated',
    header: 'LAST UPDATED',
    cell: ({ getValue }) => new Date(getValue()).toLocaleString(),
    sortDescFirst: false,
    minSize: 150,
  },
];

export default tableColumnsDefs;
