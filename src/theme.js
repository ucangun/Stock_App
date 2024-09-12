import { createTheme } from "@mui/material/styles";

const lightPalette = {
  primary: {
    light: "#14b8a6", // teal 500
    main: "#0d9488", // teal 600
    dark: "#0f766e", // teal 700
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
    light: "#475569", // slate 600
    main: "#020617", // slate 950
    dark: "#111827", // gray 900
    contrastText: "#fff",
  },
  secondary: {
    light: "#334155", // slate 700
    main: "#64748b", // slate 500
    dark: "#333",
    contrastText: "#fff",
  },
};

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    ...lightPalette,
  },
  components: {
    MuiDataGrid: {
      styleOverrides: {
        root: {
          "& .MuiDataGrid-columnHeader": {
            backgroundColor: "#fffbeb",
          },
          "& .MuiDataGrid-cell": {
            textAlign: "center",
          },
        },
      },
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    ...darkPalette,
  },
  typography: {
    h5: {
      color: "#020617", // slate  950
    },
    body2: {
      color: "#020617 !important", // slate  950
    },
  },
  components: {
    MuiDataGrid: {
      styleOverrides: {
        root: {
          "& .MuiDataGrid-columnHeader": {
            color: "#f1f5f9", //slate 100
            backgroundColor: "#64748b",
          },
          "& .MuiDataGrid-cell": {
            color: "#f1f5f9", //slate 100
            textAlign: "center",
          },
          "& .MuiSelect-select": {
            color: "#020617", // slate  950
          },
          "& .MuiSvgIcon-root": {
            color: "#020617", // slate  950
          },
        },
      },
    },
    MuiModal: {
      styleOverrides: {
        root: {
          "& .MuiBox-root": {
            backgroundColor: "#334155", // Slate 700
          },
          "& .MuiList-root": {
            backgroundColor: "#475569", // Slate 600
          },
        },
      },
    },
  },
});
