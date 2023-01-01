import { ComponentMeta, ComponentStory } from "@storybook/react";
import { CenterDecorator } from "../../utils/CenterDecorator";
import { Button } from "./Button";
import { Alarm, IdentificationBadge } from "phosphor-react";

export default {
  title: "Form/Button",
  component: Button,
  decorators: [CenterDecorator],
  argTypes: {
    children: { type: "string", defaultValue: "Example" },

    variant: {
      options: ["contained", "outlined", "text"],
      control: { type: "inline-radio" },
      defaultValue: "contained",
    },

    shape: {
      options: ["rounded", "circular", "square"],
      control: { type: "inline-radio" },
      defaultValue: "rounded",
    },

    size: {
      options: ["sm", "md", "lg"],
      control: { type: "inline-radio" },
      defaultValue: "md",
    },

    as: {
      options: ["a", "button"],
      control: { type: "inline-radio" },
      defaultValue: "button",
    },

    disabled: {
      type: "boolean",
      defaultValue: false,
    },

    leftIcon: {
      type: "select",
      options: ["No Icon", "IdentificationBadge", "Alarm"],
      mapping: {
        "No Icon": "",
        IdentificationBadge: <IdentificationBadge size={20} weight="fill" />,
        Alarm: <Alarm size={20} weight="fill" />,
      },
    },

    rightIcon: {
      control: { type: "select" },
      options: ["No Icon", "IdentificationBadge", "Alarm"],
      mapping: {
        "No Icon": "",
        IdentificationBadge: <IdentificationBadge size={20} weight="fill" />,
        Alarm: <Alarm size={18} weight="fill" />,
      },
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = ({ ...rest }) => (
  <Button {...rest} />
);

export const Contained = Template.bind({});
Contained.args = { children: "contained", variant: "contained" };

export const Outlined = Template.bind({});
Outlined.args = { children: "outlined", variant: "outlined" };

export const Text = Template.bind({});
Text.args = { children: "text", variant: "text" };
