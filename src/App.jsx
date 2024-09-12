import { createTheme, ThemeProvider } from "@mui/material/styles";
import AppRouter from "./router/AppRouter";
import { Provider, useSelector } from "react-redux";
import store from "./app/store";
import { ToastContainer } from "react-toastify";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "./app/store";
import { darkTheme } from "./theme";
import { lightTheme } from "./theme";

function App() {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ThemedApp />
        </PersistGate>
      </Provider>
      <ToastContainer />
    </>
  );
}

function ThemedApp() {
  const { mode } = useSelector((state) => state.theme);

  return (
    <>
      <ThemeProvider theme={mode === "dark" ? darkTheme : lightTheme}>
        <AppRouter />
      </ThemeProvider>
    </>
  );
}

export default App;
