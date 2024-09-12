import { createTheme } from "@mui/material/styles";

const lightPalette = {
  primary: {
    light: "#14b8a6",
    main: "#0d9488",
    dark: "#0f766e",
    contrastText: "#fff",
  },
  secondary: {
    light: "#f7fee7",
    main: "#fffbeb",
    dark: "#4d7c0f",
    contrastText: "#262626",
  },
};

const darkPalette = {
  primary: {
    light: "#26a69a",
    main: "#00897b",
    dark: "#00695c",
    contrastText: "#fff",
  },
  secondary: {
    light: "#a7ffeb",
    main: "#64ffda",
    dark: "#1de9b6",
    contrastText: "#000",
  },
};

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    ...lightPalette,
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    ...darkPalette,
  },
});
