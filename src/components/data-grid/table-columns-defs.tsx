import { ColumnDef } from '@tanstack/react-table';
import { IStock } from '../../lib/types';
import formatMarketCap from '../../lib/utils/formatMarketCap';
import './table.scss';

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
    cell: ({ getValue }) => {
      const value = getValue();

      return <span>{value}</span>;
    },
    sortDescFirst: false,
    minSize: 100,
  },
  {
    accessorKey: 'change',
    header: 'CHANGE',
    cell: ({ getValue }) => <ColorfulText value={getValue()} />,
    sortDescFirst: false,
    minSize: 100,
  },
  {
    accessorKey: 'changePercent',
    header: 'CHANGE %',
    cell: ({ getValue }) => <ColorfulText value={getValue()} />,
    sortDescFirst: false,
    minSize: 100,
  },
  {
    accessorKey: 'marketCap',
    header: 'MARKET CAP',
    cell: ({ getValue }) => {
      const marketCap = getValue();
      const formattedMarketCap = formatMarketCap(marketCap);

      return formattedMarketCap;
    },
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

const ColorfulText = ({ value }: { value: string | number }) => {
  const numberValue = Number(value) || 0;
  const className =
    numberValue > 0
      ? 'table-cell--green'
      : numberValue < 0
        ? 'table-cell--red'
        : '';

  return <span className={className}>{numberValue}</span>;
};

export default tableColumnsDefs;
