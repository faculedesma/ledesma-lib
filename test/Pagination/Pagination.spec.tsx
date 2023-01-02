import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Pagination from '../../src/components/molecules/pagination/Pagination';
import '@testing-library/jest-dom/extend-expect';

const paginationProps = {
  currentPage: 3,
  pageSize: 10,
  totalItems: 75,
  onNextPage: jest.fn(),
  onPreviousPage: jest.fn()
};

describe('<Pagination />', () => {
  it('renders pagination', () => {
    const { container } = render(<Pagination {...paginationProps} />);
    expect(container.firstChild).toHaveClass('pagination');
  });

  it('prev button disabled on first page', () => {
    const testProps = {
      ...paginationProps,
      currentPage: 1
    };
    render(<Pagination {...testProps} />);
    const button = screen.getAllByRole('button')[0];
    expect(button).toBeDisabled();
  });

  it('next button disabled on last page', () => {
    const testProps = {
      ...paginationProps,
      currentPage: 8
    };
    render(<Pagination {...testProps} />);
    const button = screen.getAllByRole('button')[1];
    expect(button).toBeDisabled();
  });

  it('prev callback is triggered on prev button click', () => {
    render(<Pagination {...paginationProps} />);
    const button = screen.getAllByRole('button')[0];
    fireEvent.click(button);
    expect(paginationProps.onPreviousPage).toHaveBeenCalledTimes(1);
  });

  it('next callback is triggered on next button click', () => {
    render(<Pagination {...paginationProps} />);
    const button = screen.getAllByRole('button')[1];
    fireEvent.click(button);
    expect(paginationProps.onNextPage).toHaveBeenCalledTimes(1);
  });
});
