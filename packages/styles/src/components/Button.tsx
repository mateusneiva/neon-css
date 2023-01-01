import { css, cx } from "@emotion/css";
import { colors } from "@neon-css/theme";

const contained = css({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  fontSize: "13px",
  fontWeight: "600",
  textTransform: "uppercase",
  textDecoration: "none",

  color: colors.white,
  background: colors.blue[500],

  border: "none",
  borderRadius: "5px",

  paddingInline: "16px",
  height: "40px",

  transition: "200ms",
  cursor: "pointer",

  svg: {
    marginRight: "8px",
  },

  "&:hover": {
    background: `${colors.blue[400]}`,
  },

  "&:active": {
    background: `${colors.blue[500] + "dd"}`,
  },
});

const outlined = cx(
  contained,
  css({
    background: "transparent",
    border: `1px ${colors.blue[500]} solid`,
    color: colors.blue[400],

    "&:hover": {
      background: `${colors.blue[400] + "30"}`,
    },

    "&:active": {
      background: `${colors.blue[400] + "50"}`,
    },
  })
);

const text = cx(
  contained,
  css({
    background: "transparent",
    color: colors.blue[400],

    "&:hover": {
      background: `${colors.blue[400] + "30"}`,

      "&:active": {
        background: `${colors.blue[400] + "60"}`,
      },
    },
  })
);

const shape = {
  rounded: css({ borderRadius: "5px" }),
  circular: css({ borderRadius: "20px" }),
  square: css({ borderRadius: "0px" }),
};

const size = {
  sm: css({
    fontSize: "12px",
    paddingInline: "15px",
  }),
  md: css({
    fontSize: "13px",
  }),
  lg: css({
    fontSize: "14px",
    paddingInline: "24px",
  }),
};

const disabled = css({
  opacity: "0.3",
  pointerEvents: "none",
});

export const Button = {
  variant: {
    contained,
    outlined,
    text,
  },

  size,
  shape,
  disabled,
};
