import React from 'react';
import './table.scss';

type RowStyleType = 'lines' | 'zebra' | 'blank';
type RowSizeType = 'large' | 'normal' | 'small' | string;
type ColumnSpaceType = 'large' | 'normal' | 'small' | string;

export interface ITableProps {
  id?: string;
  children: JSX.Element;
  rowStyle?: RowStyleType;
  rowSize?: RowSizeType;
  columnSpace?: ColumnSpaceType;
  bordered?: boolean;
}

const Table: React.FC<ITableProps> = ({
  id = 'table',
  children,
  rowStyle = 'lines',
  rowSize = 'normal',
  columnSpace = 'normal',
  bordered = true
}): JSX.Element => {
  return (
    <table
      id={id}
      className={`table ${rowStyle} rows rows-${rowSize} columns-${columnSpace} ${
        bordered ? 'bordered' : ''
      }`}
    >
      {children}
    </table>
  );
};

export default Table;
