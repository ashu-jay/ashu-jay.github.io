import React from "react";
import {
  Box,
  Button,
  Paper,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";

const Home = () => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  return (
    <Stack direction={isMobile ? "column" : "row"}>
      <Box
        sx={{
          width: isMobile ? "100vw" : "50vw",
          height: isMobile ? "50vh" : "100vh",
          overflow: "hidden",
        }}
      >
        <Box
          component={"img"}
          src="/ashwin.jpg"
          sx={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </Box>
      <Paper
        elevation={24}
        sx={{
          width: isMobile ? "100vw" : "50vw",
          bgcolor: "primary.50",
          alignContent: "center",
        }}
      >
        <Stack
          gap={5}
          justifyContent={"center"}
          alignItems={"center"}
          px={isMobile ? 1 : 10}
          py={2}
          textAlign={"center"}
        >
          <Typography variant="h2">Hey, I'm Ashwin!</Typography>
          <Stack gap={2} alignItems={"center"} justifyContent={"center"}>
            <Typography variant="h5">
              I've made this website to show you all the cool stuff I've worked
              on!
            </Typography>
            <Button
              variant="outlined"
              size="large"
              href="https://www.ashwinjayendra.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Check out the old version!
            </Button>
          </Stack>
        </Stack>
      </Paper>
    </Stack>
  );
};

export default Home;
