import React from 'react';
import Button from '../../components/Button/Button';
import ArrowRightIcon from '../../../assets/icons/arrow-right.svg';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Buttons/Button',
  component: Button,
  argTypes: {
    id: { control: { disable: true } },
    className: { control: { disable: true } },
    onClick: { action: 'clicked' }
  }
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Solid = Template.bind({});
Solid.args = {
  children: 'Button Text',
  type: 'solid',
  size: 'medium',
  disabled: false
};

export const Outline = Template.bind({});
Outline.args = {
  children: 'Button Text',
  type: 'outline',
  size: 'medium',
  disabled: false
};

export const Text = Template.bind({});
Text.args = {
  children: 'Button Text',
  type: 'text',
  size: 'medium',
  disabled: false
};

export const WithIcon = Template.bind({});
WithIcon.args = {
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

export const Small = Template.bind({});
Small.args = {
  children: 'Button Text',
  type: 'solid',
  size: 'small',
  disabled: false
};

export const Medium = Template.bind({});
Medium.args = {
  children: 'Button Text',
  type: 'solid',
  size: 'medium',
  disabled: false
};

export const Large = Template.bind({});
Large.args = {
  children: 'Button Text',
  type: 'solid',
  size: 'large',
  disabled: false
};

export const LargeWithIcon = Template.bind({});
LargeWithIcon.args = {
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
