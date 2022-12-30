import React from 'react';
import Indeterminate from '../../Progress/Indeterminate/Indeterminate';
import './table-skeleton.scss';

export interface ITableSkeletonProps {
  id?: string;
}

const TableSkeleton: React.FC<ITableSkeletonProps> = ({
  id = 'table-skeleton'
}): JSX.Element => {
  return (
    <div id={id} className="table-skeleton">
      <Indeterminate />
    </div>
  );
};

export default TableSkeleton;
