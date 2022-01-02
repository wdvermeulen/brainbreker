import { createTheme } from "@mui/material/styles";

const muiTheme = createTheme({
  palette: {
    mode: "dark",
    secondary: {
      main: "#FFFFFF",
    },
    primary: {
      light: "#B5179E",
      main: "#7209B7",
      dark: "#29006C",
    },
  },
  typography: {
    fontFamily: "Josefin Sans, Helvetica, sans-serif",
    button: {
      fontFamily: "inherit",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Josefin Sans'; 
          font-style: normal;
          font-weight: 400;
          src: url('../fonts/Josefin_Sans/static/JosefinSans-Medium.ttf') format('truetype');
        }
      `,
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: "1rem",
          textTransform: "initial",
        },
        contained: {
          backgroundImage:
            "linear-gradient(to bottom right, rgba(181, 23, 158, 0), #29006C)",
        },
        text: {
          background: "none",
        },
      },
    },
    MuiToggleButton: {
      styleOverrides: {
        root: {
          textTransform: "initial",
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          "&:last-child": {
            paddingBottom: "16px",
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "rgba(18, 18, 18, .3)",
          backdropFilter: "blur(20px)",
          borderRadius: "5px",
        },
      },
    },
    MuiBottomNavigationAction: {
      styleOverrides: {
        root: {
          minWidth: "initial",
          gap: "5px",
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          maxWidth: "280px",
        },
      },
    },
  },
});

export default muiTheme;
