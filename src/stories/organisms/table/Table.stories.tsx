import React from 'react';
import Table from '../../../components/organisms/table';
import TableRow from '../../../components/organisms/table/table-row/TableRow';
import TableHeaderCell from '../../../components/organisms/table/table-header-cell/TableHeaderCell';
import TableCell from '../../../components/organisms/table/table-cell/TableCell';
import { ComponentStory, ComponentMeta } from '@storybook/react';

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

export default {
  title: 'Core/Table',
  component: Table,
  argTypes: {
    id: { control: { disable: true } }
  }
} as ComponentMeta<typeof Table>;

const Template: ComponentStory<typeof Table> = (args) => <Table {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  children: TableChildren,
  rowStyle: 'lines',
  rowSize: 'normal',
  columnSpace: 'normal',
  bordered: false
};

export const Bordered = Template.bind({});
Bordered.args = {
  children: TableChildren,
  rowStyle: 'lines',
  rowSize: 'normal',
  columnSpace: 'normal',
  bordered: true
};
