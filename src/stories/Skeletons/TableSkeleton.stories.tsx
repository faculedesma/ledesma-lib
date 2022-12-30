import React from 'react';
import TableSkeleton from '../../components/Table/TableSkeleton';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Skeletons/TableSkeleton',
  component: TableSkeleton,
  argTypes: {
    id: { control: { disable: true } }
  }
} as ComponentMeta<typeof TableSkeleton>;

const Template: ComponentStory<typeof TableSkeleton> = (args) => (
  <TableSkeleton {...args} />
);

export const Basic = Template.bind({});
Basic.args = {};
