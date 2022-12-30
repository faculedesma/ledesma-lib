import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TableRow from '../../src/components/Table/TableRow';
import TableCell from '../../src/components/Table/TableCell';
import '@testing-library/jest-dom/extend-expect';

const row = ['Facundo', 'Ledesma', '+34617434373', 29, 'Active'];

const tableRowProps = {
  children: (
    <>
      {row.map((name, columnIndex) => {
        return <TableCell key={columnIndex}>{name}</TableCell>;
      })}
    </>
  ),
  active: false,
  hovered: false,
  onClick: jest.fn()
};

describe('<TableRow />', () => {
  it('renders table row', () => {
    render(<TableRow {...tableRowProps} />);
    expect(screen.getByText('Facundo')).toBeTruthy();
  });

  it('click handler is executed when row is clicked', () => {
    render(<TableRow {...tableRowProps} />);
    const row = screen.getByRole('row');
    fireEvent.click(row);
    expect(tableRowProps.onClick).toHaveBeenCalledTimes(1);
  });
});
