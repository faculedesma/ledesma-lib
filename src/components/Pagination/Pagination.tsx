import React from 'react';
import Button from '../Button/Button';
import ArrowRightIcon from '../../../assets/icons/arrow-right.svg';
import ArrowLeftIcon from '../../../assets/icons/arrow-left.svg';
import './pagination.scss';

export interface IPaginationProps {
  currentPage: number;
  pageSize: number;
  totalItems: number;
  onNextPage: () => void;
  onPreviousPage: () => void;
}

const Pagination = ({
  currentPage = 0,
  pageSize = 0,
  totalItems = 1,
  onNextPage,
  onPreviousPage
}: IPaginationProps): JSX.Element => {
  return (
    <div className="pagination">
      <div className="actions">
        <Button onClick={onPreviousPage} disabled={currentPage === 1}>
          <ArrowLeftIcon />
        </Button>
        <Button
          onClick={onNextPage}
          disabled={currentPage === Math.trunc(totalItems / 10) + 1}
        >
          <ArrowRightIcon />
        </Button>
      </div>
      <div className="pages">
        Page {currentPage} of {Math.trunc(totalItems / pageSize) + 1}
      </div>
    </div>
  );
};

export default Pagination;
