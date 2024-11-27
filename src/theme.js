import { createTheme } from "@mui/material";

export const colors = [
  "#FF6F61", // Vibrant Coral
  "#FF9F1C", // Bright Orange
  "#FFD700", // Vivid Yellow
  "#06D6A0", // Aqua Green
  "#118AB2", // Bold Teal Blue
  "#EF476F", // Pinkish Red
];

const theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#1D1F26", // Dark background
    },
    primary: {
      main: "#FF6F61", // Vibrant Coral
    },
    secondary: {
      main: "#118AB2", // Bold Teal Blue
    },
    warning: {
      main: "#FFD700", // Vivid Yellow
    },
    success: {
      main: "#06D6A0", // Aqua Green
    },
    error: {
      main: "#EF476F", // Pinkish Red
    },
    text: {
      primary: "#D3D3D3", // Light gray for text
      secondary: "#A0A0A0", // Dimmed gray for secondary text
    },
  },
  components: {
    MuiIconButton: {
      defaultProps: {
        size: "small",
      },
    },
    MuiSnackbar: {
      defaultProps: {
        anchorOrigin: {
          vertical: "top",
          horizontal: "center",
        },
      },
    },
    MuiSnackbarContent: {
      styleOverrides: {
        message: {
          fontWeight: 600,
          textTransform: "capitalize",
        },
      },
    },
  },
  typography: {
    fontFamily: "Lato, sans-serif",
    button: {
      textTransform: "unset",
      fontWeight: 700,
    },
    h5: {
      fontWeight: 700,
    },
    h6: {
      fontWeight: 700,
    },
  },
  shape: {
    borderRadius: 0,
  },
});

export default theme;
