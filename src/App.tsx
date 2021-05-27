import React from 'react';
import { GlobalStyle } from './styles/GlobalStyle';
import Router from './core/Router';
import { MuiThemeProvider } from "@material-ui/core/styles";
import Theme from './styles/Theme';
import SnackbarProvider from './context/Snackbar';
import PositionedSnackbar from './component/snackbar/Snackbar.component';

function App() {
  return (
    <SnackbarProvider>
      <PositionedSnackbar />
      <MuiThemeProvider theme={Theme}>
        <GlobalStyle />
        <Router />
      </MuiThemeProvider>
    </SnackbarProvider>
  );
}

export default App;
