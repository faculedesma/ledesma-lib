import React from 'react';
import './table.scss';

type RowStyleType = 'lines' | 'zebra' | 'blank';
type RowSizeType = 'large' | 'normal' | 'small' | string;
type ColumnSpaceType = 'large' | 'normal' | 'small' | string;

export interface ITableProps {
  children: JSX.Element;
  rowStyle?: RowStyleType;
  rowSize?: RowSizeType;
  columnSpace?: ColumnSpaceType;
}

const Table = ({
  children,
  rowStyle = 'lines',
  rowSize = 'normal',
  columnSpace = 'normal'
}: ITableProps): JSX.Element => {
  return (
    <table
      className={`table ${rowStyle} rows rows-${rowSize} columns-${columnSpace}`}
    >
      {children}
    </table>
  );
};

export default Table;
