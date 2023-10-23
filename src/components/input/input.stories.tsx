// import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import type { Meta, StoryObj } from '@storybook/react';

import Input from './input';
import { ESTYLE } from '../../constants/enums';

const meta: Meta<typeof Input> = {
  component: Input,
  parameters: {
    backgrounds: {
      values: [
        { name: 'dark', value: 'black' }, // need to learn how to hoist these colors to global level
      ],
    },
  },
  argTypes: {
    inputStyle: {
      options: [
        'front',
        'top-left',
        'top-right',
        'bottom-left',
        'bottom-right',
      ],
      control: { type: 'radio' },
    },
    inputType: {
      options: [
        ...Object.keys(ESTYLE),
      ],
      control: { type: 'radio' },
    },
  },
};

type Story = StoryObj<typeof Input>;

export const Base: Story = {

};

export default meta;
