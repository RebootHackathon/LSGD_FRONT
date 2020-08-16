import { createMuiTheme } from '@material-ui/core/styles';
import blue from  '@material-ui/core/colors/blue';
import red from '@material-ui/core/colors/red';

const theme = createMuiTheme({
    palette: {
        primary: {
          light: blue[400],
          main: blue[700],
          dark: '#002884',
          contrastText: '#fff',
        },
        secondary: {
          light: '#ff7961',
          main: '#f44336',
          dark: '#ba000d',
          contrastText: '#000',
        },
      },
      typography: {
        // "lineHeight": 1.5,
        // "letterSpacing": 0.32,
        // useNextVariants: true,
        // suppressDeprecationWarnings: true,
        subtitle2: {
          "lineHeight": 1.2
        },
      },
  });

export default theme;
  