import { createTheme } from "@mui/material";
import { deepPurple } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      ...deepPurple,
      main: deepPurple[500],
    },
  },
});

export default theme;
