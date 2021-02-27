import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";
import JustButtonC, {
  JustButtonCProps,
} from "../components/atoms/buttons/JustButtonC";

export default {
  title: "Example/ButtonC",
  component: JustButtonC,
  argTypes: {
    bg: { control: "color" },
  },
} as Meta;

const Template: Story<JustButtonCProps> = (args) => <JustButtonC {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: "Button",
};
