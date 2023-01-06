import { Meta, Story } from "@storybook/react";
import { Spinner as SpinnerComponent, SpinnerProps } from "./Spinner";

export default {
  title: "Feedback/Spinner",
  component: SpinnerComponent,
  argTypes: {
    css: {
      table: { disable: true },
    },
    size: {
      options: ["sm", "md", "lg", "xl"],
      control: {
        type: "inline-radio",
      },
    },
  },
  args: {
    size: "md",
  },
} as Meta;

export const Spinner: Story<SpinnerProps> = (args) => (
  <SpinnerComponent {...args} />
);