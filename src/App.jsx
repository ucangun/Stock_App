import { createTheme, ThemeProvider } from "@mui/material/styles";
import AppRouter from "./router/AppRouter";
import { Provider } from "react-redux";
import store from "./app/store";
import { ToastContainer } from "react-toastify";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        light: "#14b8a6",
        main: "#0d9488",
        dark: "#0f766e",
        contrastText: "#fff",
      },
      secondary: {
        light: "#f7fee7",
        main: "#84cc16",
        dark: "#4d7c0f",
        contrastText: "#262626",
      },
    },
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <AppRouter />
        </Provider>
        <ToastContainer />
      </ThemeProvider>
    </>
  );
}

export default App;
