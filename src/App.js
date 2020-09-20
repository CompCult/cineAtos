import React from "react";
import "./App.css";
import Routes from "./services/Routes";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Theme from './services/Theme.js';

// Call it once in your app. At the root of your app is the best place
toast.configure({
  autoClose: 4000,
  draggable: false
  //etc you get the idea
});

function App() {
  return (
    <MuiThemeProvider theme={Theme}>
      <Routes />
    </MuiThemeProvider>
  );
}

export default App;
