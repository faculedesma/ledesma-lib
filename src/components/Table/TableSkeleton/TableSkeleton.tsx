import React from 'react';
import Indeterminate from '../../Progress/Indeterminate/Indeterminate';
import './table-skeleton.scss';

const TableSkeleton = (): JSX.Element => {
  return (
    <div className="table-skeleton">
      <Indeterminate />
    </div>
  );
};

export default TableSkeleton;
