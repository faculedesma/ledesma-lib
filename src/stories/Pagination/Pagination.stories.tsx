import React from 'react';
import Pagination from '../../components/Pagination/Pagination';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Core/Pagination',
  component: Pagination,
  argTypes: {}
} as ComponentMeta<typeof Pagination>;

const Template: ComponentStory<typeof Pagination> = (args) => (
  <Pagination {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
  currentPage: 1,
  pageSize: 10,
  totalItems: 100,
  onNextPage: () => {},
  onPreviousPage: () => {}
};
