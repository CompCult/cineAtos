import { createMuiTheme } from "@material-ui/core/styles";

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
            main: "#0060B8"
        },
        text: {
            primary: "#0060B8",
            secondary: "#999999"
        }
    }
});

export default theme;
