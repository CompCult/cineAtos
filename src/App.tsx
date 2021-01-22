import React from 'react';
import { Provider } from 'react-redux';
import { GlobalStyle } from './core/GlobalStyle';
import Router from './core/Router';
import { MuiThemeProvider } from "@material-ui/core/styles";
import Theme from './core/Theme';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import store from './store/store';

toast.configure({
  autoClose: 3000,
  draggable: false
});

function App() {
  return (
    <Provider store={store}>
      <MuiThemeProvider theme={Theme}>
        <GlobalStyle />
        <Router />
      </MuiThemeProvider>
    </Provider>
  );
}

export default App;
