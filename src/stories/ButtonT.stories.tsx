import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";
import JustButtonT, { JustButtonTProps } from "../components/atoms/buttons/JustButtonT";


export default {
  title: "Example/ButtonT",
  component: JustButtonT,
  argTypes: {
    bg: { control: "color" },
  },
} as Meta;

const Template: Story<JustButtonTProps> = (args) => <JustButtonT {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: "Button",
};
