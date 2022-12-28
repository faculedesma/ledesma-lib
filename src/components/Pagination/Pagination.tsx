import React from 'react';
import './pagination.scss';

export interface IPaginationProps {
  currentPage: number;
  pageSize: number;
  totalItems: number;
  onNextPage: () => void;
  onPreviousPage: () => void;
}

const Pagination = ({
  currentPage,
  pageSize,
  totalItems,
  onNextPage,
  onPreviousPage
}: IPaginationProps): JSX.Element => {
  return (
    <div className="pagination">
      <div className="actions">
        <button onClick={onPreviousPage}>Prev</button>
        <button onClick={onNextPage}>Next</button>
      </div>
      <div className="label">
        Page {currentPage} of {Math.ceil(totalItems / pageSize)}
      </div>
    </div>
  );
};

export default Pagination;
