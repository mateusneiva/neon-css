import { colors } from "@neon-css/theme";
import { globalCss } from "@stitches/react";

export const GlobalCSS = globalCss({
  "@import":
    "url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;600;700&display=swap')",

  "*": {
    boxSizing: "border-box",
    padding: 0,
    margin: 0,
    fontFamily: "Roboto, sans-serif",
  },

  body: {
    background: colors.grey[900],
  },

  "html, body, #root": {
    width: "100%",
  },
});
