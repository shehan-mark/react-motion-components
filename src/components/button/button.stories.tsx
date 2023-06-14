import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from './button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Button',
  component: Button,
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// eslint-disable-next-line react/jsx-props-no-spreading, react/function-component-definition
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const ButtonOne = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ButtonOne.args = {
  // eslint-disable-next-line no-console
  onClick: (e) => console.log('clicked me', e),
  text: 'Motion Button',
};
