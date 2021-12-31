import { createStitches } from "@stitches/react";

export const { styled, css } = createStitches({
  theme: {
    colors: {
      light: "#B5179E",
      medium: "#7209B7",
      dark: "#29006C",
      lightest: "#FFFFFF",
      textLight: "#FFFFFF",
      textDark: "#29006C",
      glassTileBorder: "#FFFFFF",
      glassTileBackground: "rgba(0,0,0,.3)",
      answerBackground: "#FFFFFF",
      answerBackgroundDark: "#CCCCCC",
    },
    space: {
      0: "0",
      1: "5px",
      2: "10px",
      3: "20px",
    },
    fontSizes: {
      1: "1rem",
      2: "1.5rem",
      3: "2rem",
    },
    fonts: {
      text: "Josefin Sans, Helvetica, sans-serif",
      header: "Playfair Display, serif",
    },
    fontWeights: {
      normal: 400,
      bold: 700,
    },
    lineHeights: {},
    letterSpacings: {},
    sizes: {
      0: "0",
      1: "5px",
      2: "10px",
      3: "20px",
      columnMaxWidth: "30rem",
    },
    borderWidths: {
      1: "1px",
      2: "3px",
      3: "5px",
      4: "10px",
    },
    borderStyles: {},
    radii: {
      0: "0",
      1: "5px",
      2: "10px",
      3: "20px",
    },
    shadows: {
      default: "0 4px 4px rgba(0, 0, 0, .25)",
      glassTile: "inset 0 0 20px #FFFFFF",
    },
    zIndices: {
      liquidShape: -2,
      liquidShapeOutline: -1,
    },
    transitions: {
      collapse: "max-width .3s, max-height .3s",
    },
  },
});
