import React from 'react';
import './table-header-cell.scss';

type TextAlignType = 'center' | 'right' | 'left';

export interface ITableHeaderCellProps {
  children: string;
  textAlign?: TextAlignType;
}

const TableHeaderCell = ({
  children,
  textAlign = 'left'
}: ITableHeaderCellProps): JSX.Element => {
  return <th className={`header-cell header-cell-${textAlign}`}>{children}</th>;
};

export default TableHeaderCell;
