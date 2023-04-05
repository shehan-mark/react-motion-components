import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Button from "./button";


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "My/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const ButtonOne = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ButtonOne.args = {
  action: () => console.log('clicked me'),
  buttonText: "Storybook Button"
};