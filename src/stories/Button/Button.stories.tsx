import React from 'react';
import { Button } from '../../components/Button/Button';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ArrowRightSVG from '../../../assets/icons/arrow-right.svg';

export default {
  title: 'Buttons/Button',
  component: Button,
  argTypes: {
    className: { control: { disable: true } },
    startIcon: { control: { disable: true } },
    endIcon: { control: { disable: true } },
    onClick: { action: 'clicked' }
  }
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const SolidButton = Template.bind({});
SolidButton.args = {
  children: 'Button Text',
  type: 'solid',
  size: 'medium',
  disabled: false
};

export const OutlineButton = Template.bind({});
OutlineButton.args = {
  children: 'Button Text',
  type: 'outline',
  size: 'medium',
  disabled: false
};

export const TextButton = Template.bind({});
TextButton.args = {
  children: 'Button Text',
  type: 'text',
  size: 'medium',
  disabled: false
};

export const WithIconButton = Template.bind({});
WithIconButton.args = {
  children: 'Button Text',
  type: 'solid',
  size: 'medium',
  disabled: false,
  startIcon: ArrowRightSVG
};

export const SmallButton = Template.bind({});
SmallButton.args = {
  children: 'Button Text',
  type: 'solid',
  size: 'small',
  disabled: false
};

export const MediumButton = Template.bind({});
MediumButton.args = {
  children: 'Button Text',
  type: 'solid',
  size: 'medium',
  disabled: false
};

export const LargeButton = Template.bind({});
LargeButton.args = {
  children: 'Button Text',
  type: 'solid',
  size: 'large',
  disabled: false
};
