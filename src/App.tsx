import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@material-ui/core';
import { ToastContainer } from 'react-toastify';
import GlobalStyle from './styles/global';
import { store, persistor } from './store/store';
import 'react-toastify/dist/ReactToastify.min.css';
import Routes from './routes';
import themes from './styles/themes';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ThemeProvider theme={themes}>
          <GlobalStyle />
          <Routes />

          <ToastContainer autoClose={3000} />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
