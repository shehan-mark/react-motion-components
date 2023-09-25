import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Input from './input';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Input',
  component: Input,
} as ComponentMeta<typeof Input>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// eslint-disable-next-line react/jsx-props-no-spreading, react/function-component-definition
const Template: ComponentStory<typeof Input> = () => <Input />;

export const BaseInput = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
// CustomInput.args = {
//   // eslint-disable-next-line no-console
//   onClick: () => ({}),
//   text: 'Motion Button',
// };
