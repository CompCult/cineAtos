import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
    palette: {
        background: {
            default: "#fff",
            paper: "#fff"
        },
        common: {
            black: "#ffffff",
            white: "#ffffff"
        },
        primary: {
            contrastText: "#ffffff",
            dark: "#0060B8",
            light: "#212121",
            main: "#0782db"
        },
        secondary: {
            contrastText: "#ffffff",
            dark: "#FF0000",
            light: "#ff7c7c",
            main: "#f66465"
        },
        text: {
            primary: "#464646",
            secondary: "#2B6CB0"
        }
    }
});

export default theme;