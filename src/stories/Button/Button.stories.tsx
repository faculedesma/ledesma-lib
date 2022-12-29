import React from 'react';
import Button from '../../components/Button/Button';
import ArrowRightIcon from '../../../assets/icons/arrow-right.svg';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Buttons/Button',
  component: Button,
  argTypes: {
    className: { control: { disable: true } },
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

export const ButtonWithIcon = Template.bind({});
ButtonWithIcon.args = {
  children: (
    <>
      <ArrowRightIcon />
      Button Text
    </>
  ),
  type: 'solid',
  size: 'medium',
  disabled: false
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

export const LargeButtonWithIcon = Template.bind({});
LargeButtonWithIcon.args = {
  children: (
    <>
      <ArrowRightIcon />
      Button Text
    </>
  ),
  type: 'solid',
  size: 'large',
  disabled: false
};
