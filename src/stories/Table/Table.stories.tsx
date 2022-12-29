import React from 'react';
import Table from '../../components/Table';
import TableRow from '../../components/Table/TableRow/TableRow';
import TableHeaderCell from '../../components/Table/TableHeaderCell/TableHeaderCell';
import TableCell from '../../components/Table/TableCell/TableCell';
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
  argTypes: {}
} as ComponentMeta<typeof Table>;

const Template: ComponentStory<typeof Table> = (args) => <Table {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  children: TableChildren,
  rowStyle: 'lines',
  rowSize: 'normal',
  columnSpace: 'normal',
  bordered: true
};
