import React from "react";
import { GlobalCSS } from "../packages/styles/lib/global";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  layout: "centered",

  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
      }}
    >
      <Story />
    </div>
  ),
];

GlobalCSS();
