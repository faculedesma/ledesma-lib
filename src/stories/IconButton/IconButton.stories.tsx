import React from 'react';
import Button from '../../components/Button/Button';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Buttons/IconButton',
  component: Button,
  argTypes: {
    className: { control: { readonly: true } },
    onClick: { action: 'clicked' }
  }
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const SolidIconButton = Template.bind({});
SolidIconButton.args = {
  children: 'Button Text'
};

export const OutlineIconButton = Template.bind({});
OutlineIconButton.args = {
  children: 'Button Text',
  type: 'outline'
};

export const StandardIconButton = Template.bind({});
StandardIconButton.args = {
  children: 'Button Text',
  type: 'text'
};
