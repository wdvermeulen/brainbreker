import { styled } from "@stitches/react";

const Col = styled("div", {
  display: "flex",
  flexDirection: "column",
  maxWidth: "100%",
  flex: "1 0 100%",
  flexBasis: "0",
  width: "100%",
  variants: {
    gap: {
      large: {
        gap: "20px",
      },
      medium: {
        gap: "10px",
      },
      small: {
        gap: "5px",
      },
      none: {},
    },
  },
  defaultVariants: {
    gap: "large",
  },
});

export default Col;
