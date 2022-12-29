import React from 'react';
import TableSkeleton from '../../components/Table/TableSkeleton';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Skeletons/TableSkeleton',
  component: TableSkeleton,
  argTypes: {}
} as ComponentMeta<typeof TableSkeleton>;

const Template: ComponentStory<typeof TableSkeleton> = (args) => (
  <TableSkeleton />
);

export const Basic = Template.bind({});
Basic.args = {};
