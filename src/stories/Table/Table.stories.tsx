import React from 'react';
import DataTable from '../../components/Table';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Core/Table',
  component: DataTable,
  argTypes: {}
} as ComponentMeta<typeof DataTable>;

const Template: ComponentStory<typeof DataTable> = (args) => (
  <DataTable {...args} />
);

export const Basic = Template.bind({});
