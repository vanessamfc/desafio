import React from "react";
import ContainerForm from "./pages/ContainerForm";
import GlobalStyle from "./styles/global";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { store, persistor } from "./store/store";
import Routes from "./routes/";
import themes from "./styles/themes";
import { ThemeProvider } from "@material-ui/core";

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ThemeProvider theme={themes}>
          <GlobalStyle />
          <Routes />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
