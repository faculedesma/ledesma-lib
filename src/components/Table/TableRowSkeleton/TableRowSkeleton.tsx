import React from 'react';

export interface ITableRowSkeletonProps {
  columns: number;
}

export const TableRowSkeleton = ({
  columns
}: ITableRowSkeletonProps): JSX.Element => {
  return <div className={`skeleton`}>{columns}</div>;
};
