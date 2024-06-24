import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Paper,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

const Landing = () => {
  const [expanded, setExpanded] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const navigate = useNavigate();

  useEffect(() => {
    if (expanded) {
      setTimeout(() => {
        setRedirect(true);
      }, 1000);
    }
  }, [expanded]);

  const handleAnimationComplete = () => {
    navigate("/home");
  };

  return (
    <AnimatePresence>
      {!redirect && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          onAnimationComplete={handleAnimationComplete}
        >
          <Stack direction={isMobile ? "column" : "row"}>
            <Box
              sx={{
                width: isMobile ? "100vw" : expanded ? "0vw" : "50vw",
                height: isMobile ? (expanded ? "0vh" : "50vh") : "100vh",
                overflow: "hidden",
                transition: "width 1s, height 1s",
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
                width: isMobile || expanded ? "100vw" : "50vw",
                height: expanded ? "100vh" : "auto",
                bgcolor: "primary.50",
                alignContent: "center",
                transition: "width 1s, height 1s",
              }}
            >
              <Stack gap={5} px={isMobile ? 1 : 10} py={2} textAlign={"center"}>
                <Typography variant="h2">Hey, I'm Ashwin!</Typography>
                <Stack gap={2} alignItems={"center"} justifyContent={"center"}>
                  <Typography variant="h5">
                    I've made this website to show you all the cool stuff I've
                    worked on!
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
                  <Button
                    variant="outlined"
                    size="large"
                    onClick={() => setExpanded(true)}
                  >
                    Check it out!
                  </Button>
                </Stack>
              </Stack>
            </Paper>
          </Stack>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Landing;
