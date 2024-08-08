import { createTheme } from "@mui/material";
import { deepPurple, purple } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      ...deepPurple,
      main: deepPurple[500],
    },
    secondary: {
      ...purple,
      main: purple[500],
    },
    background: {
      main: deepPurple[50],
    },
  },
  typography: {
    fontFamily: `"Montserrat", "Arial", sans-serif`,
    h2: { fontWeight: 500 },
  },
});

export default theme;
