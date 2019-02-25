import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import { indigo, red } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: indigo,
    secondary: red,
  },
  typography: {
    useNextVariants: true,
    fontFamily: 'inherit',
  },
});

export default theme;
