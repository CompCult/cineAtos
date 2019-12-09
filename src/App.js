import React from 'react'
import './App.css'
import { Provider } from 'react-redux'
import store from './store/Index.js'
import Routes from './services/Routes'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({

  palette: {
    background: {
      default: "#fff",
      paper: "#fff"
    },
    common: {
      black: "#bcbcbcbc",
      white: "#bcbcbcbc"
    },
    primary: {
      contrastText: "#ffffff",
      dark: "#212121",
      light: "#212121",
      main: "#212121",
    },
    secondary: {
      contrastText: "#fff",
      dark: "#ffffff",
      light: "#ffffff",
      main: "#999999",
    },
    text: {
      primary: '#999999',
      secondary: '#999999',
    },

  },
});
console.log(theme)
function App() {

  return (
    <Provider store={store}>
      <MuiThemeProvider theme={theme}>
        <Routes />
      </MuiThemeProvider>
    </Provider>
  );
}

export default App
