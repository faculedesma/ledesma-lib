import React from 'react';
import './table-row.scss';

export interface ITableRowProps {
  children: JSX.Element;
  active?: boolean;
  hover?: boolean;
  onClick?: React.MouseEventHandler;
}

const TableRow: React.FC<ITableRowProps> = ({
  children,
  active = false,
  hover = false,
  onClick = undefined
}): JSX.Element => {
  return (
    <tr
      className={`${active ? 'active' : ''} ${hover ? 'hovered' : ''}`}
      onClick={onClick}
    >
      {children}
    </tr>
  );
};

export default TableRow;
