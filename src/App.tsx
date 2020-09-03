import React from "react";
import ContainerForm from "./pages/ContainerForm";
import GlobalStyle from "./styles/global";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { store, persistor } from "./store/store";
import Routes from "./routes/";

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <GlobalStyle />
        <Routes />
      </PersistGate>
    </Provider>
  );
}

export default App;
