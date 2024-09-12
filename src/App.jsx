import { ThemeProvider } from "@mui/material/styles";
import AppRouter from "./router/AppRouter";
import { useSelector } from "react-redux";
import { Provider } from "react-redux";
import store from "./app/store";
import { ToastContainer } from "react-toastify";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "./app/store";
import { lightTheme, darkTheme } from "./theme";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemedApp />
      </PersistGate>
    </Provider>
  );
}

function ThemedApp() {
  const isDarkMode = useSelector((state) => state.theme.darkMode);
  return (
    <>
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <AppRouter />
        <ToastContainer />
      </ThemeProvider>
    </>
  );
}

export default App;
