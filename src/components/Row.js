import { styled } from "../sharedStyles/theme";

const Row = styled("div", {
  display: "flex",
  flexWrap: "wrap",
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
  },
  defaultVariants: {
    gap: "large",
  },
});

export default Row;
