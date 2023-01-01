import { colors } from "@neon-css/theme";
import { injectGlobal } from "@emotion/css";

export const Global = injectGlobal`
  @import url('https://fonts.googleapis.com/css2?family=Merriweather+Sans:wght@400;500;600;700&display=swap');

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: "Merriweather Sans",sans-serif;
  }

  body {
    background: ${colors.grey[900]};
  }
`;
