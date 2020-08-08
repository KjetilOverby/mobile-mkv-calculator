import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#01755c',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
    white: {
      main: 'white'
    },
    background: {
      main: '#393f4d'
    },
    leftBackground: {
      main: '#282c37'
    },
    textLeft: {
      main: '#d4d4dc'
    },
    header: {
      main: '#393f4d'
    },
    text: {
      main: '#feda6a'
    },
    button: {
      main: '#393f4d'
    },
    headerTitle: {
      main: '#feda6a'
    },
    footer: { 
      main: '#393f4d'
    }
  },
});

export default theme;
