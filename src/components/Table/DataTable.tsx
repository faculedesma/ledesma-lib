import React, { useEffect } from 'react';
import TableRow from './TableRow';
import TableHeaderCell from './TableHeaderCell';
import TableCell from './TableCell';
import './table.scss';

type RowStyleType = 'lines' | 'zebra' | 'blank';
type RowSizeType = 'large' | 'normal' | 'small';
type ColumnSpaceType = 'normal' | 'small';

export interface ITableProps {
  rows: Array<Array<string | number>>;
  columns: string[];
  rowStyle?: RowStyleType;
  rowSize?: RowSizeType;
  columnSpace?: ColumnSpaceType;
}

const DataTable = ({
  rows,
  columns,
  rowStyle = 'lines',
  rowSize = 'normal',
  columnSpace = 'normal'
}: ITableProps): JSX.Element => {
  useEffect(() => {
    if (columns.length < 1) {
      throw Error('Must have at least one column');
    }
    if (!rows.every((row) => row.length === columns.length)) {
      throw Error('Row length must be equal to columns length');
    }
  }, [rows, columns]);

  return (
    <table
      className={`table ${rowStyle} rows rows-${rowSize} columns-${columnSpace}`}
    >
      <thead>
        <TableRow>
          <>
            {columns.map((name, columnIndex) => {
              return (
                <TableHeaderCell key={columnIndex}>{name}</TableHeaderCell>
              );
            })}
          </>
        </TableRow>
      </thead>
      <tbody>
        {rows.map((row, rowIndex) => {
          return (
            <TableRow key={rowIndex}>
              <>
                {row.map((data, rowDataIndex) => {
                  return <TableCell key={rowDataIndex}>{data}</TableCell>;
                })}
              </>
            </TableRow>
          );
        })}
      </tbody>
    </table>
  );
};

export default DataTable;
