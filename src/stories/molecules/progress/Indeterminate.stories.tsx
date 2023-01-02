import React from 'react';
import Indeterminate from '../../../components/molecules/progress/indeterminate';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Progress/Indeterminate',
  component: Indeterminate,
  argTypes: {
    id: { control: { disable: true } }
  }
} as ComponentMeta<typeof Indeterminate>;

const Template: ComponentStory<typeof Indeterminate> = (args) => (
  <Indeterminate {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
  label: ''
};

export const WithLabel = Template.bind({});
WithLabel.args = {
  label: 'Loading'
};
