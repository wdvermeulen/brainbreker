import { styled } from "../sharedStyles/theme";

const Col = styled("div", {
  display: "flex",
  flexDirection: "column",
  maxWidth: "100%",
  variants: {
    gap: {
      none: {},
      small: {
        gap: "$1",
      },
      medium: {
        gap: "$2",
      },
      large: {
        gap: "$3",
      },
    },
    sizing: {
      auto: {
        flex: "0 0 auto",
        width: "auto",
      },
      fullWidth: {
        flex: "1 0",
        width: "100%",
      },
    },
  },
  defaultVariants: {
    gap: "large",
    sizing: "fullWidth",
  },
});

export default Col;
