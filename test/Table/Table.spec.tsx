import React from 'react';
import { render } from '@testing-library/react';
import Table from '../../src/components/Table/Table';
import TableRow from '../../src/components/Table/TableRow';
import TableHeaderCell from '../../src/components/Table/TableHeaderCell';
import TableCell from '../../src/components/Table/TableCell';
import '@testing-library/jest-dom/extend-expect';

const columns = ['Name', 'Surname', 'Phone', 'Age', 'Action'];

const rows = [
  ['Facundo', 'Ledesma', '+34617434373', 29, 'Actions'],
  ['Facundo', 'Ledesma', '+34617434373', 29, 'Actions'],
  ['Facundo', 'Ledesma', '+34617434373', 29, 'Actions'],
  ['Facundo', 'Ledesma', '+34617434373', 29, 'Actions'],
  ['Facundo', 'Ledesma', '+34617434373', 29, 'Actions'],
  ['Facundo', 'Ledesma', '+34617434373', 29, 'Actions'],
  ['Facundo', 'Ledesma', '+34617434373', 29, 'Actions'],
  ['Facundo', 'Ledesma', '+34617434373', 29, 'Actions'],
  ['Facundo', 'Ledesma', '+34617434373', 29, 'Actions'],
  ['Facundo', 'Ledesma', '+34617434373', 29, 'Actions']
];

const TableChildren = (
  <>
    <thead>
      <TableRow>
        <>
          {columns?.map((name, columnIndex) => {
            return <TableHeaderCell key={columnIndex}>{name}</TableHeaderCell>;
          })}
        </>
      </TableRow>
    </thead>
    <tbody>
      {rows?.map((row: any, rowIndex: number) => {
        return (
          <TableRow key={rowIndex} onClick={() => console.log('row clicked')}>
            <>
              {row.map((data: any, rowDataIndex: number) => {
                return <TableCell key={rowDataIndex}>{data}</TableCell>;
              })}
            </>
          </TableRow>
        );
      })}
    </tbody>
  </>
);

const tableProps = {
  children: TableChildren,
  rowSize: 'normal',
  columnSpace: 'normal',
  bordered: false
};

describe('<Table />', () => {
  it('renders table', () => {
    const { container } = render(<Table {...tableProps} />);
    expect(container.firstChild).toHaveClass('table');
  });

  it('renders table', () => {
    const testProps = {
      ...tableProps,
      bordered: true
    };
    const { container } = render(<Table {...testProps} />);
    expect(container.firstChild).toHaveClass('table');
    expect(container.firstChild).toHaveClass('bordered');
  });

  // it('prev button disabled on first page', () => {
  //   const testProps = {
  //     ...paginationProps,
  //     currentPage: 1
  //   };
  //   render(<Pagination {...testProps} />);
  //   const button = screen.getAllByRole('button')[0];
  //   expect(button).toBeDisabled();
  // });

  // it('next callback is triggered on next button click', () => {
  //   render(<Pagination {...paginationProps} />);
  //   const button = screen.getAllByRole('button')[1];
  //   fireEvent.click(button);
  //   expect(paginationProps.onNextPage).toHaveBeenCalledTimes(1);
  // });
});
