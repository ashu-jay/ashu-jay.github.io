import { createTheme } from "@mui/material";
import { deepPurple, yellow } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      ...deepPurple,
      main: deepPurple[500],
    },
    secondary: {
      ...yellow,
      main: yellow[500],
    },
  },
});

export default theme;
