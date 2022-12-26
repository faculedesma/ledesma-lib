import React from 'react';
import './table-row.scss';

export interface ITableRowProps {
  children: JSX.Element;
  active?: boolean;
  hover?: boolean;
}

export const TableRow = ({
  children,
  active = false,
  hover = false
}: ITableRowProps): JSX.Element => {
  return (
    <tr className={`${active ? 'active' : ''} ${hover ? 'hovered' : ''}`}>
      {children}
    </tr>
  );
};
