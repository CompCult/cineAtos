import React from "react";
import "./App.css";
import Routes from "./services/Routes";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import image from "../src/images/image.svg";
// Call it once in your app. At the root of your app is the best place
toast.configure({
  autoClose: 4000,
  draggable: false
  //etc you get the idea
});

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
      dark: "#0060B8",
      light: "#212121",
      main: "#0782db"
    },
    secondary: {
      contrastText: "#ffffff",
      dark: "#0060B8",
      light: "#212121",
      main: "#046fcf"
    },
    text: {
      primary: "#999999",
      secondary: "#999999"
    }
  }
});

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <Routes />
      <img src={image} alt="logo" className="teste" />
    </MuiThemeProvider>
  );
}

export default App;
