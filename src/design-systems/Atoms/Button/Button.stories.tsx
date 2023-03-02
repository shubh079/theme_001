import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button } from "./Button";

export default {
  title: "Atoms/Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
    loading: {
      control: "boolean",
      defaultValue: false,
    },
    disabled: {
      control: "boolean",
      defaultValue: false,
    },
    fullWidth: {
      control: "boolean",
      defaultValue: false,
    },
    size: {
      control: "select",
      options: ["small", "medium", "large"],
      defaultValue: "medium",
    },
    variant: {
      control: "select",
      options: ["solid", "outlined"],
      defaultValue: "solid",
    },
    color: {
      control: "select",
      options: ["neon", "primary"],
      defaultValue: "neon",
    },
    className: {
      defaultValue:
        "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full",
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "Button",
};
