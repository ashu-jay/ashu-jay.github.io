import logo from "./logo.svg";
import "./App.css";
import { Box, Button, Stack, Typography, ThemeProvider } from "@mui/material";
import theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box
        bgcolor={theme.palette.primary[50]}
        minHeight={"100vh"}
        justifyContent={"center"}
        alignItems={"center"}
        display={"flex"}
      >
        <Stack gap={5} alignItems={"center"}>
          <Typography variant="h3" align="center">
            This website is currently under development.
          </Typography>
          <Button
            variant="outlined"
            size="large"
            sx={{ width: "300px" }}
            href="https://www.ashwinjayendra.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Check out the old version?
          </Button>
        </Stack>
      </Box>
    </ThemeProvider>
  );
}

export default App;
