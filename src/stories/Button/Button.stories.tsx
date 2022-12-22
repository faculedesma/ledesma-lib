import React from 'react';
import Button from '../../components/Button/Button';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: { handleClick: { action: 'handleClick' } }
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const PrimaryButton = Template.bind({});
PrimaryButton.args = {
  label: 'Button Text',
  type: 'primary',
  size: 'medium'
};

export const SecondaryButton = Template.bind({});
SecondaryButton.args = {
  label: 'Button Text',
  type: 'secondary',
  size: 'medium'
};

export const SmallButton = Template.bind({});
SmallButton.args = {
  label: 'Button Text',
  type: 'primary',
  size: 'small'
};

export const MediumButton = Template.bind({});
MediumButton.args = {
  label: 'Button Text',
  type: 'primary',
  size: 'medium'
};

export const LargeButton = Template.bind({});
LargeButton.args = {
  label: 'Button Text',
  type: 'primary',
  size: 'large'
};
