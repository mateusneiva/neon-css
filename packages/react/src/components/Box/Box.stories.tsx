import { ComponentMeta, ComponentStory } from "@storybook/react";
import { CenterDecorator } from "../../utils/CenterDecorator";
import { Box } from "./Box";

export default {
  title: "Layout/Box",
  component: Box,
  decorators: [CenterDecorator],
} as ComponentMeta<typeof Box>;

export { Box };
