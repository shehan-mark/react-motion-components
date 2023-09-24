// import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import Button from './button';
import { ButtonType } from './types';

// this default export object controls how storybook list our component
// and provide information for the addons used by us.
const meta: Meta<typeof Button> = {
  component: Button,
  parameters: {
    backgrounds: {
      values: [
        { name: 'dark', value: 'black' }, // need to learn how to hoist these colors to global level
      ],
    },
  },
  argTypes: {
    buttonType: {
      options: [
        ButtonType.DEFAULT,
        ButtonType.PRIMARY,
        ButtonType.INFO,
        ButtonType.ALERT,
        ButtonType.DANGER,
      ],
      control: { type: 'radio' },
    },
  },
};

// defining a story
type Story = StoryObj<typeof Button>;

export const Base: Story = {
  // name: 'Button Base', // if not for this, storybook will default to named export
  args: {
    text: 'Default Button',
    onClick: () => {},
    buttonType: ButtonType.DEFAULT,
    isLoading: false,
    disabled: false,
  },
  // render: () => <Button text="Default" onClick={() => {}} />,
};

export default meta;
