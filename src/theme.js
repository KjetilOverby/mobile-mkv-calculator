import { createMuiTheme } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#556cd6",
    },
    secondary: {
      main: "#01755c",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#fff",
    },
    white: {
      main: "white",
    },
    background: {
      main: "#222629",
    },
    leftBackground: {
      main: "#282c37",
    },
    textLeft: {
      main: "#d4d4dc",
    },
    header: {
      main: "#222629",
    },
    text: {
      main: "#86c232",
    },
    button: {
      main: "#222629",
    },
    headerTitle: {
      main: "#86c232",
    },
    footer: {
      main: "#222629",
    },
  },
});

export default theme;
