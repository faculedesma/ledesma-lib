import React from 'react';
import './table-cell.scss';

type TextAlignType = 'center' | 'right' | 'left';

export interface ITableCellProps {
  children: string | number | JSX.Element;
  textAlign?: TextAlignType;
}

const TableCell: React.FC<ITableCellProps> = ({
  children,
  textAlign = 'left'
}): JSX.Element => {
  return <td className={`cell cell-${textAlign}`}>{children}</td>;
};

export default TableCell;
