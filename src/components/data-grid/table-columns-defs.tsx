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
    size: 85,
    sortingFn: (row1, row2) => {
      const collator = new Intl.Collator(undefined);

      return collator.compare(
        row1?.original?.symbol ?? '',
        row2?.original?.symbol ?? '',
      );
    },
  },
  {
    accessorKey: 'name',
    header: 'NAME',
    cell: ({ getValue }) => getValue(),
    sortDescFirst: false,
    size: 250,
    sortingFn: (row1, row2) => {
      const collator = new Intl.Collator(undefined);

      return collator.compare(
        row1?.original?.name ?? '',
        row2?.original?.name ?? '',
      );
    },
  },
  {
    accessorKey: 'price',
    header: 'PRICE',
    cell: ({ getValue }) => {
      const value = getValue();

      return <span>{value}</span>;
    },
    sortDescFirst: false,
    size: 70,
    sortingFn: (row1, row2, columnId) => {
      const collator = new Intl.Collator(undefined);

      return collator.compare(row1.getValue(columnId), row2.getValue(columnId));
    },
  },
  {
    accessorKey: 'change',
    header: 'CHANGE',
    cell: ({ getValue }) => <ColorfulText value={getValue()} />,
    sortDescFirst: false,
    size: 85,
    sortingFn: (row1, row2, columnId) => {
      const collator = new Intl.Collator(undefined);

      return collator.compare(row1.getValue(columnId), row2.getValue(columnId));
    },
  },
  {
    accessorKey: 'changePercent',
    header: 'CHANGE %',
    cell: ({ getValue }) => <ColorfulText value={getValue()} />,
    sortDescFirst: false,
    size: 115,
    sortingFn: (row1, row2, columnId) => {
      const collator = new Intl.Collator(undefined);

      return collator.compare(row1.getValue(columnId), row2.getValue(columnId));
    },
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
    size: 115,
    sortingFn: (row1, row2, columnId) => {
      const collator = new Intl.Collator(undefined);

      return collator.compare(row1.getValue(columnId), row2.getValue(columnId));
    },
  },
  {
    accessorKey: 'lastUpdated',
    header: 'LAST UPDATED',
    cell: ({ getValue }) => new Date(getValue()).toLocaleString(),
    sortDescFirst: false,
    size: 160,
    sortingFn: (row1, row2) => {
      return (
        new Date(row1.original.lastUpdated).getTime() -
        new Date(row2.original.lastUpdated).getTime()
      );
    },
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
