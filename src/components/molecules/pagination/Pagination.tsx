import React from 'react';
import Button from '../../atoms/button/Button';
import ArrowRightIcon from '../../../../assets/icons/arrow-right.svg';
import ArrowLeftIcon from '../../../../assets/icons/arrow-left.svg';
import './pagination.scss';

export interface IPaginationProps {
  id?: string;
  currentPage: number;
  pageSize: number;
  totalItems: number;
  onNextPage: () => void;
  onPreviousPage: () => void;
}

const Pagination: React.FC<IPaginationProps> = ({
  id = 'pagination',
  currentPage = 0,
  pageSize = 0,
  totalItems = 1,
  onNextPage,
  onPreviousPage
}): JSX.Element => {
  return (
    <div id={id} className="pagination">
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
