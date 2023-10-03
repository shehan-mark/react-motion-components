// import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import type { Meta, StoryObj } from '@storybook/react';

import Input from './input';

const meta: Meta<typeof Input> = {
  component: Input,
  parameters: {
    backgrounds: {
      values: [
        { name: 'dark', value: 'black' }, // need to learn how to hoist these colors to global level
      ],
    },
  },
};

type Story = StoryObj<typeof Input>;

export const Base: Story = {

};

export default meta;